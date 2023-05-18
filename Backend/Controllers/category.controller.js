const Category = require("../models/category.model");
const bookModel = require("../models/book");
const joi = require("joi");
const validationCategory = joi.object({
  name: joi.string().required(),
});
class CategoryController {
  async findAll(req, res) {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async findOne(req, res) {
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async create(req, res) {
    console.log(req);
    console.log(req.body);
    const validation = validationCategory.validate(req.body);
    if (validation.error)
      return res.status(500).send("name must be string & required");
    try {
      const category = await Category.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async remove(req, res) {
    const id = req.params.id;
    try {
      console.log(id);
      await Category.deleteOne({ _id: id });
      return res.status(204).send("");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async update(req, res) {
    const validation = validationCategory.validate(req.body);
    if (validation.error)
      return res.status(500).send("name must be string & required");
    const id = req.params.id;
    try {
      const category = await Category.findByIdAndUpdate(id, req.body);
      return res.status(201).send("");
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async findBooks(req, res) {
    try {
      const books = await bookModel
        .find({ categoryId: req.params.id })
        .populate("categoryId");
      return res.status(200).json(books);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async findPopular(req, res) {
    // const categories_ids = await Category.find({}, { _id: 1 });
    // const books =
    const test = await bookModel.find().aggregate([
      {
        $group: {
          _id: "$categoryId",
          books: { $push: "$$ROOT" },
        },
      },
    ]);
    console.log("test");
    console.log(test);
    return res.status(200).json(test);
    try {
      const categories = await Category.find({});
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

module.exports = new CategoryController();
