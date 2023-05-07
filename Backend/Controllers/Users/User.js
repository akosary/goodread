const userModel = require("../../models/User");
const config = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registeration= async (req, res) => {
    try {
      const { firstname,lastname ,email, password ,image } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ _id: this._id },config.TOKEN_KEY);
      const user = new userModel({
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname:lastname,
        image:image,
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