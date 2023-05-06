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
    const category = Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await Category.deleteOne({ id });
    return res.status(204);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const update = async (req, res) => {
  const id = req.params.id;
  try {
    const category = Category.findByIdAndUpdate(id, req.body);
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
};
