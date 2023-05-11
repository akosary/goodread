
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    min: 5
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);

