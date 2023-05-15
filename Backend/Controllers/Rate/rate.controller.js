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
  const { rate, user, book } = req.body;
  try {
    const newRate = new Rate({ rate, user, book });
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
    res.status(200).json("Rate deleted");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  if (!rate) {
    return res.status(400).json("Rate is required");
  }
  try {
    await Rate.findByIdAndUpdate(id, { rate });
    res.status(200).json("Rate updated");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { get, getOne, post, remove, update };
