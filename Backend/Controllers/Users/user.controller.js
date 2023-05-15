const User = require("../../models/userModel");
const config = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const mime = require("mime");
const sharp = require("sharp");
const hashing = require("../../middleware/hashing");

// CRUD operations
const get = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOne = (req, res) => {
  res.json(res.user);
};

const post = async (req, res) => {
  const { firstname, lastname, email, password, role, image } = req.body;
  let imgPath = "";
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword,
    role: role,
    image: imgPath,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { firstname, lastname, email, password, role, image } = req.body;
  if (firstname != null) {
    res.user.firstname = firstname;
  }
  if (lastname != null) {
    res.user.lastname = lastname;
  }
  if (email != null) {
    res.user.email = email;
  }
  if (password != null) {
    const hashedPassword = await bcrypt.hash(password, 10);
    res.user.password = hashedPassword;
  }
  if (role != null) {
    res.user.role = role;
  }
  if (image != null) {
    res.user.image = image;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Validation functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password, minLength, maxLength) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&/?]).{8,20}$/;
  return (
    password.length >= minLength &&
    password.length <= maxLength &&
    re.test(password)
  );
}
function validateInput(input, min, max) {
  if (
    input &&
    typeof input == "string" &&
    input.length > min &&
    input.length < max
  ) {
    return true;
  }
}
function validateImage(filename) {
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
    return false;
  }
  const ext = path.extname(filename);
  if (![".jpg", ".jpeg", ".png", ".gif", ".webp", ".tiff"].includes(ext)) {
    return false;
  }
  try {
    const buffer = fs.readFileSync(filename);
    const metadata = sharp(buffer).metadata();
    if (
      !metadata.format ||
      !["jpeg", "png", "gif", "webp", "tiff"].includes(metadata.format)
    ) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
}

// registration and logging
const registeration = async (req, res) => {
  try {
    // res.setHeader("Content-Type", "multipart/form-data");
    const { firstname, lastname, email, password, confirmPassword, filename } =
      req.body;
    if (!validateInput(firstname, 3, 100)) {
      return res.status(400).json({
        error:
          "Invalid first name! Input must be a string at least 3 charcters.",
      });
    }
    if (!validateInput(lastname, 3, 100)) {
      return res.status(400).json({
        error:
          "Invalid last name! Input must be a string at least 3 charcters.",
      });
    }
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email address!" });
    } else {
      const input_user = await User.findOne({ email });
      if (input_user) {
        return res.status(400).json({ error: "Email already exists!" });
      }
    }
    if (!validatePassword(password, 8, 20)) {
      return res.status(400).json({
        error:
          "At least 8 charcter one uppercase and one number and containing one from: @#$&",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "passwords not match" });
    }
    if (!filename || !validateImage(filename)) {
      return res.status(400).json({ error: "Invalid image file!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
      image: filename,
      role: "user",
    });
    const newUser = await user.save();
    const token = jwt.sign({ id: newUser._id }, config.TOKEN_KEY);
    res.json({ newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const loggedin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide an email and password." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = jwt.sign({ id: user._id }, config.TOKEN_KEY);
  res.json({ message: "Login successful.", token });
};

module.exports = { registeration, loggedin, get, getOne, post, update, remove };