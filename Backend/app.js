require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const userRouter = require("./Routes/User");
const usercontroller = require("./Controllers/Users/User");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Routes/users_example");
const auhorRouter = require("./Routes/author-routes");
const auth = require("./middleware/auth");
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rateRouter");
const ISADMIN = require("./middleware/IsAdmin");
const categoryRouter = require("./Routes/categories.routes");

//  show logs in development environment
app.use(morgan("dev"));

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.post("/register", usercontroller.registeration);
app.post("/login", usercontroller.loggedin);
app.use("/users", auth, userRouter);
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
app.use("/categories", categoryRouter);
app.use("/admins", ISADMIN, userRouter);

// author resource routes
app.use("/api/v1/authors", auhorRouter);

module.exports = app;
