require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require("multer");
const userRouter = require("./Routes/User");
const usercontroller = require("./Controllers/Users/User");
const morgan = require("morgan");
const auhorRouter = require("./Routes/author-routes");
const auth = require("./middleware/auth");
const bookRouter = require("./Routes/bookRoute");
const rateRouter = require("./Routes/rateRouter");
const ISADMIN = require("./middleware/IsAdmin");
const categoryRouter = require("./Routes/categories.routes");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.post("/register", usercontroller.registeration);
app.post("/login", usercontroller.loggedin);
app.use("/users", auth, userRouter);
app.use("/books", bookRouter);
app.use("/rates", rateRouter);
app.use("/categories", categoryRouter);
app.use("/admins", ISADMIN, userRouter);
app.use("/api/v1/authors", auhorRouter);

module.exports = app;
