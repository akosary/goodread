const userModel = require("../../models/User");
const config = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const sharp = require('sharp');
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password, minLength, maxLength) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&/?]).{8,20}$/;
  return password.length >= minLength && password.length <= maxLength && re.test(password);
}
function validateInput(input,min,max) {
  if(input && typeof input =='string' && input.length > min && input.length < max)
  {
     return true;
  }
}
function validateImage(filename) {
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
    return false;
  }
  const ext = path.extname(filename);
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.tiff'].includes(ext)) {
    return false;
  }
  try {
    const buffer = fs.readFileSync(filename);
    const metadata = sharp(buffer).metadata();
    if (!metadata.format || !['jpeg', 'png', 'gif', 'webp', 'tiff'].includes(metadata.format)) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
}
const registeration= async (req, res) => {
    try {
      // res.setHeader("Content-Type", "multipart/form-data");
      const {firstname,lastname,email,password,confirmPassword,filename } = req.body;
      if (!validateInput(firstname,3,100)) {
        return res.status(400).json({ error: 'Invalid first name! Input must be a string at least 3 charcters.' });
      }
      if (!validateInput(lastname,3,100)) {
        return res.status(400).json({ error: 'Invalid last name! Input must be a string at least 3 charcters.' });
      }
      if (!email || !validateEmail(email)) {
       return res.status(400).json({ error: 'Invalid email address!' });
      } else {
        const input_user = await userModel.findOne({ email });
        if (input_user) {
         return res.status(400).json({ error: 'Email already exists!' });
        } 
      }
      if (!validatePassword(password,8,20)) {
        return res.status(400).json({ error: 'At least 8 charcter one uppercase and one number and containing one from: @#$&' });
      }
      if (password!== confirmPassword) {
        return res.status(400).json({ message: 'passwords not match' });
      }
      if (!filename || !validateImage(filename)) {
       return res.status(400).json({ error: 'Invalid image file!' });
      }
   
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ _id: this._id },config.TOKEN_KEY);
      const user = new userModel({
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname:lastname,
        image:filename,
        token:token
      });
      const newUser = await user.save();
      res.json({newUser });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  };


const loggedin= async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide an email and password.' });
    }
  
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user._id }, config.TOKEN_KEY);

    res.json({ message: 'Login successful.', token });
  };
module.exports = { registeration,loggedin };