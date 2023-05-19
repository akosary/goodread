const Author = require("../models/author-model");
const APIFeatures = require("../utils/api-features");

exports.getAllAuthors = async (req, res) => {
  try {
    // BUILD QUERY
    const features = new APIFeatures(Author.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // EXECUTE QUERY
    const authors = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      result: authors.length,
      data: {
        authors: authors,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        author,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.creatAuthor = async (req, res) => {
  try {
    const url = `${req.protocol}://${req.get("host")}`;
    const author = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      image: `${url}/uploads/${req.file.filename}`,
    });
    await author.save();
    res.status(201).json({
      status: "success",
      data: {
        author,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        author,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await Author.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};
