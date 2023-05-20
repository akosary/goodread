const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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
// const bookRouter = require("./Routes/book-routes");
const auth = require("./middleware/auth");
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rate.routes");
const ISADMIN = require("./middleware/IsAdmin");
const categoryRouter = require("./Routes/categories.routes");
const upload = require("./utils/multer-upload");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

// serving the static uploads directory
app.use("/uploads", express.static("uploads"));

//  show logs in development environment
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// const upload = multer({ dest: 'uploads/' , limits: {
//   fileSize: 1024 * 1024 * 5, // 5MB
// },});
app.post("/register", upload.single("image"), usercontroller.registeration);

app.post("/Adminlogin", usercontroller.Adminloggedin);
app.post("/Userlogin", usercontroller.Userloggedin);
// app.post("/login", usercontroller.loggedin);
app.use("/users", auth, userRouter);
// app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
app.use("/categories", categoryRouter);
app.use("/admins", ISADMIN, userRouter);
app.use("/api/v1/authors", auhorRouter);

// book resource routes
// app.use("/api/v1/books", bookRouter);

module.exports = app;
