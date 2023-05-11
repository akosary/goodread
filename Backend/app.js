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
const auth = require("./middleware/auth");
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rateRouter");
const ISADMIN = require("./middleware/IsAdmin");
const categoryRouter = require("./Routes/categories.routes");

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.post("/register", usercontroller.registeration);
app.post("/login", usercontroller.loggedin);
app.use("/users", auth, userRouter);
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
app.use("/categories", categoryRouter);
app.use("/admins", ISADMIN, userRouter);

module.exports = app;
