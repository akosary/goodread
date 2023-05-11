const Rate = require("../../models/rate");
const subscribers = {};

const create = async (req, res) => {
  try {
    const rate = new Rate({
      rate: req.body.rate,
      user: req.body.user,
      book: req.body.book,
    });
    await rate.save();
    res.status(201).json(rate);
  } catch (err) {
    res.status(400).json(err);
  }
};
const findAll = async (req, res) => {};
const findOne = async (req, res) => {};
module.exports = { create, findAll, findOne };
