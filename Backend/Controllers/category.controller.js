const Category = require("../models/category.model");
const findAll = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    await Category.deleteOne({ _id: id });
    return res.status(204).send("");
  } catch (error) {
    return res.status(500).send(error);
  }
};
const update = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body);
    return res.status(201).send("");
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findAllBooks = async (req, res) => {
  try {
    // const books = await Book.find().populate("category");
    // const books = await Category.find({}, { books: 1 }).populate("books");
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findOneBooks = async (req, res) => {
  const id = req.params.id;
  try {
    // const books = await Category.findById(id, { books: 1 }).populate("books");
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const findPopular = async (req, res) => {
  try {
    const categories = await Category.find({});
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  remove,
  update,
  findAllBooks,
  findOneBooks,
};
