const Rate = require("../../models/rate");
const subscribers = {};

const get = async (req, res) => {
  try {
    const rates = await Rate.find();
    res.status(200).json(rates);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const rate = await Rate.findById(id);
    res.status(200).json(rate);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const post = async (req, res) => {
  const { rate, user, book, status } = req.body;
  try {
    const newRate = new Rate({ rate, user, book, status });
    await newRate.save();
    res.status(201).json(newRate);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Rate.findByIdAndDelete(id);
    res.status(200).json("Deleted Successfully.");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const { rate, status } = req.body;
  if (!rate) {
    return res.status(400).json("Rate is required");
  }
  if (!status) {
    return res.status(400).json("Status is required");
  }
  try {
    await Rate.findByIdAndUpdate(id, req.body);
    res.status(200).json("Updated");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { get, getOne, post, remove, update };
