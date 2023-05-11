const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: false, maxlength:100,minlength:3 },
  lastname: { type: String, required: false,maxlength:100,minlength:3 },
  email: { type: String,required: false, unique: false,match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/},
  password: { type: String,required: false},
  image:{ type: String },
  role:{type:String,required:true},
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
