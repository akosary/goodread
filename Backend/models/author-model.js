const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Author must have a first name"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Author must have a first name"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Author must have a date of birth"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
