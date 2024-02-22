const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const productsRoute = require("./routes/v1/products.route");

app.use("/api/v1/product", productsRoute);

module.exports = app;
