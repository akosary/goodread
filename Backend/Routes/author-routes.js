const express = require("express");
const authorControllers = require("../Controllers/author-controller");

const router = express.Router();

router.get("/", authorControllers.getAllAuthors);
router.get("/:id", authorControllers.getAuthor);
router.post("/", authorControllers.creatAuthor);
router.patch("/:id", authorControllers.updateAuthor);
router.delete("/:id", authorControllers.deleteAuthor);

module.exports = router;
