const express = require("express");
const cors = require("cors");
const app = express();
const paypal = require("paypal-rest-sdk");
const connect = require("./configs/db");
const productsController = require("./controllers/product.controller");
const ordersController = require("./controllers/order.controller");
const paymentController = require("./controllers/payment.controller");
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/products", productsController);
app.use("/orders", ordersController);
app.use("/payment", paymentController);

app.listen(port, async () => {
  try {
    await connect();
    console.log("db Connected");
  } catch (err) {
    console.log(err.message);
  }

  console.log("listening on port " + port);
});
