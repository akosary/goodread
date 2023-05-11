require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const userRouter = require("./Routes/users_example");
const auth = require("./middleware/auth");
<<<<<<< HEAD
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rateRouter");

=======
const categoryRouter = require("./Routes/categories.routes");
>>>>>>> origin/ahmed_ramadan
app.use(express.json());

// Logic goes here

module.exports = app;

app.use("/users", auth, userRouter);
<<<<<<< HEAD
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
=======
app.use("/categories", categoryRouter);
>>>>>>> origin/ahmed_ramadan

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});
