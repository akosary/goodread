const express = require("express");
const Router = express.Router();
const bookController = require("../Controllers/bookController");
const bookMiddleware = require("../middleware/book");

Router.get("/", bookController.getBooks);

Router.post("/", bookController.createBook);

Router.get("/:id", bookMiddleware.findBook, bookController.showBook);

Router.delete("/:id", bookMiddleware.findBook, bookController.deleteBook);

Router.patch("/:id", bookMiddleware.findBook, bookController.updateBook);

Router.get("/popularBooks", bookController.popularBooks);

module.exports = Router;
