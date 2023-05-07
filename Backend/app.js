require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const userRouter = require("./Routes/users_example");
const auth = require("./middleware/auth");
const categoryRouter = require("./Routes/categories.routes");
app.use(express.json());

// Logic goes here

module.exports = app;

app.use("/users", auth, userRouter);
app.use("/categories", categoryRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});
