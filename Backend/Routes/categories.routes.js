const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/category.controller");
router.get("/", categoryController.findAll);
router.post("/", categoryController.create);
router.get("/:id", categoryController.findOne);
router.delete("/:id", categoryController.remove);
router.put("/:id", categoryController.update);
module.exports = router;
