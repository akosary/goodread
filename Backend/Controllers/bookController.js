const bookModel = require("../models/book");
const ObjectId = require("mongoose").Types.ObjectId;
const Joi = require("joi");
const photoValidation = Joi.string()
  .uri({
    scheme: ["http", "https"],
  })
  .required();

function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}

function validateName(name) {
  if (typeof name == "string" && name.length >= 5) {
    return true;
  } else {
    return false;
  }
}
class bookController {
  getBooks(req, res) {
    try {
      bookModel
        .find()
        .populate("authorId")
        .populate("categoryId")
        .then((books) => {
          res.json({
            message: "All books",
            books: books,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  createBook(req, res) {
    const { authorId, categoryId, name, photo } = req.body;
    const { error } = photoValidation.validate(photo);

    try {
      if (!isValidObjectId(categoryId)) {
        return res
          .status(400)
          .json({ error: "CategoryId is requied and must be ObjectId " });
      } else if (!isValidObjectId(authorId)) {
        return res
          .status(400)
          .json({ error: "AuthorId is requied and must be ObjectId " });
      } else if (!validateName(name)) {
        return res
          .status(400)
          .json({ error: "Name is required and must be string" });
      } else if (error) {
        res.status(500).json(error.message);
      } else {
        bookModel
          .create(req.body)
          .then((book) => {
            res.json(book);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  showBook(req, res) {
    try {
      const id = req.params.id;
      bookModel
        .findOne({ _id: id })
        .populate("authorId")
        .populate("categoryId")
        .then((book) => {
          res.json({
            message: "your book",
            book: book,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  deleteBook(req, res) {
    try {
      const id = req.params.id;
      bookModel
        .findOneAndDelete({ _id: id })
        .then((book) => {
          res.json({
            message: "Suceesful Delete",
            book: book,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  updateBook(req, res) {
    const { authorId, categoryId, name, photo } = req.body;
    const { error } = photoValidation.validate(photo);
    const id = req.params.id;
    try {
      if (categoryId) {
        if (!isValidObjectId(categoryId)) {
          return res
            .status(400)
            .json({ error: "CategoryId is requied and must be ObjectId " });
        }
      }
      if (authorId) {
        if (!isValidObjectId(authorId)) {
          return res
            .status(400)
            .json({ error: "AuthorId is requied and must be ObjectId " });
        }
      }
      if (name) {
        if (!validateName(name)) {
          return res
            .status(400)
            .json({ error: "Name is required and must be string" });
        }
      }
      if (photo) {
        if (error) {
          res.status(500).json(error.message);
        }
      }

      bookModel
        .findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true })
        .then((book) => {
          res.json({
            message: "Suceesful update",
            book: book,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new bookController();
