const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  rate: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

const RateModel = mongoose.model("Rate", userSchema);

module.exports = RateModel;
