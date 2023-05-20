require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./Routes/users_example");
const auhorRouter = require("./Routes/author-routes");
const bookRouter = require("./Routes/book-routes");
const auth = require("./middleware/auth");

// serving the static uploads directory
app.use("/uploads", express.static("uploads"));

//  show logs in development environment
app.use(morgan("dev"));

app.use(express.json());

// Logic goes here

// author resource routes
app.use("/api/v1/authors", auhorRouter);

// book resource routes
app.use("/api/v1/books", bookRouter);

app.use("/users", auth, userRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/welcome", (req, res) => {
  res.status(200).send("Welcome");
});

module.exports = app;
