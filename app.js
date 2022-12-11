// app.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const productRouter = require("./routes/product");
const GroceryRouter = require("./routes/grocery");

const app = express();

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB || "mongodb://localhost:27017/groceries");
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/product", productRouter);
app.use("/api/groceries", GroceryRouter);

const port = 8080;

db.once("open", function () {
  console.log("Connected!");
  app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
  });
});
