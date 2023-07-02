const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Import the path module
const app = express();

const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const reportController = require("./controllers/reportController");

const customCron = require("./cron/cron");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Connection successful, you can perform further operations here
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    // Connection failed, handle the error
    console.error("MongoDB connection error:", error);
  });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/api/products", productController);
app.use("/api/order", orderController);
app.use("/api/report", reportController);

// Cron job
customCron.sendCustomMail();

// serving the frontend
// Serve the frontend static files
app.use(express.static(path.join(__dirname, './Frontend/dist')));

// Redirect all other routes to the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Frontend/dist/index.html'));
});
// app.use(express.static(path.join(__dirname + "/Frontend/dist")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname + "/Frontend/dist/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

app.listen(process.env.PORT, () =>
  console.log(`Server has started successfully...`)
);
