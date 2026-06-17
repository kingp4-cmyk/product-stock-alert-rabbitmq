const { connectRabbitMQ, EXCHANGE_NAME } = require("../rabbitmq");

const {
  users,
  subscriptions,
  favorites,
  notifications
} = require("../data");

const { sendStockEmail } = require("../services/emailService");

async function startNotificationSubscriber() {
  const channel = await connectRabbitMQ();

  const queue = await channel.assertQueue("", {
    exclusive: true
  });

  await channel.bindQueue(queue.queue, EXCHANGE_NAME, "");

  console.log("Notification Subscriber RabbitMQ event bekliyor...");

  channel.consume(queue.queue, async (message) => {
    if (message !== null) {
      try {
        const eventData = JSON.parse(message.content.toString());

        console.log("Subscriber event aldı:", eventData);

        if (eventData.eventType === "ProductSizeRestocked") {
          //Bu ürünün bu bedenini bekleyen kullanıcılar bulunur.
          const subscribedUsers = subscriptions
            .filter(subscription =>
              subscription.productId === eventData.productId &&
              subscription.size === eventData.size
            )
            .map(subscription => subscription.userId);

          
          const favoriteUsers = favorites
            .filter(favorite => favorite.productId === eventData.productId)
            .map(favorite => favorite.userId);

         
          const targetUserIds = [
            ...new Set([...subscribedUsers, ...favoriteUsers])
          ];

          for (const userId of targetUserIds) {
            const user = users.find(user => user.id === userId);

            const emailResult = await sendStockEmail(
              user,
              eventData.productName,
              eventData.size,
              eventData.newStock
            );


            notifications.push({
              id: notifications.length + 1,
              userId: userId,
              productId: eventData.productId,
              size: eventData.size,
              message: `${eventData.productName} ürününün ${eventData.size} bedeni tekrar stokta!`,
              emailStatus: emailResult.message,
              isRead: false
            });
          }

          console.log("Bildirimler oluşturuldu. Bildirim giden kullanıcılar:", targetUserIds);
        }

        channel.ack(message);

      } catch (error) {
        console.error("Notification Subscriber hatası:", error);
        channel.ack(message);
      }
    }
  });
}

module.exports = startNotificationSubscriber;
