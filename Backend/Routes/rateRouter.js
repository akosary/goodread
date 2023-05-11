const express = require("express");
const Router = express.Router();
const rateController = require("../Controllers/Rate/rate.controller");

// Router.get("/", bookController.getBooks);

Router.post("/", rateController.create);

// Router.get("/:id", bookMiddleware.findBook,bookController.showBook);

// Router.delete("/:id",bookMiddleware.findBook, bookController.deleteBook);

// Router.patch("/:id",bookMiddleware.findBook ,bookController.updateBook);

module.exports = Router;
