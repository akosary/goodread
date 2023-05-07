require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const userRouter = require("./Routes/User");
const usercontroller=require("./Controllers/Users/User")
const auth = require("./middleware/auth");

app.use(express.json());


module.exports = app;
// app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', usercontroller.registeration);
app.post('/login',usercontroller.loggedin)
app.use("/users", auth, userRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});
