const express = require("express");
const Router = express.Router();
const getOneRateOrStatus = require("../middleware/rateOrStatus");
const rateController = require("../Controllers/Rate/rate.controller");

Router.get("/", rateController.get);

Router.get("/:id", getOneRateOrStatus, rateController.getOne);

Router.post("/", rateController.post);

Router.delete("/:id", getOneRateOrStatus, rateController.remove);

Router.patch("/:id", getOneRateOrStatus, rateController.update);

module.exports = Router;
