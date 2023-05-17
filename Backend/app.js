const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const multer = require("multer");
const userRouter = require("./Routes/User");
const usercontroller = require("./Controllers/Users/user.controller");
const morgan = require("morgan");
const auhorRouter = require("./Routes/author-routes");
const auth = require("./middleware/auth");
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rate.routes");
const ISADMIN = require("./middleware/IsAdmin");
const categoryRouter = require("./Routes/categories.routes");
app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(bodyParser.json());
//  show logs in development environment
app.use(morgan("dev"));

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.post("/register", usercontroller.registeration);
app.post("/Adminlogin", usercontroller.Adminloggedin);
app.post("/Userlogin", usercontroller.Userloggedin);
app.use("/users", auth, userRouter);
app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
app.use("/categories", categoryRouter);
app.use("/admins", ISADMIN, userRouter);

// author resource routes
app.use("/api/v1/authors", auhorRouter);

module.exports = app;
