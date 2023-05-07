const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, unique: true},
  password: String,
  image:{ type: String, required: true },
  token: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
