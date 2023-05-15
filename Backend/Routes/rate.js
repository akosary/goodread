const express = require("express");
const Router = express.Router();
const getOneRate = require("../middleware/getRate");
const rateController = require("../Controllers/Rate/rate.controller");

Router.get("/", rateController.get);

Router.get("/:id", getOneRate, rateController.getOne);

Router.post("/", rateController.post);

Router.delete("/:id", getOneRate, rateController.remove);

Router.patch("/:id", getOneRate, rateController.update);

module.exports = Router;
