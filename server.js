const express = require("express");
const app = express();

const productRoutes = require("./routes/products");
const subscriptionRoutes = require("./routes/subscriptions");
const userRoutes = require("./routes/users");

const startNotificationSubscriber = require("./subscribers/notificationSubscriber");


app.use(express.json());


app.use(express.static("public"));


app.use("/products", productRoutes);


app.use("/subscriptions", subscriptionRoutes);


app.use("/users", userRoutes);


startNotificationSubscriber();


app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});
