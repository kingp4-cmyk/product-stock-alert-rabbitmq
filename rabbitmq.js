
const amqp = require("amqplib");


const RABBITMQ_URL = "amqp://localhost";

const EXCHANGE_NAME = "stock_events";


let channel = null;


async function connectRabbitMQ() {
  
  if (channel) {
    return channel;
  }


  const connection = await amqp.connect(RABBITMQ_URL);


  channel = await connection.createChannel();


  await channel.assertExchange(EXCHANGE_NAME, "fanout", {
    durable: false
  });

  console.log("RabbitMQ bağlantısı kuruldu.");


  return channel;
}


module.exports = {
  connectRabbitMQ,
  EXCHANGE_NAME
};
