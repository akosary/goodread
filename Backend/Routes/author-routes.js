const express = require("express");
const authorControllers = require("../Controllers/author-controller");
const router = express.Router();
const upload = require("../utils/multer-upload");

router.get("/", authorControllers.getAllAuthors);
router.get("/:id", authorControllers.getAuthor);
router.post("/", upload.single("image"), authorControllers.creatAuthor);
router.patch("/:id", authorControllers.updateAuthor);
router.delete("/:id", authorControllers.deleteAuthor);

module.exports = router;
