const jwt = require('jsonwebtoken');
const config = process.env;
const userModel = require("../models/User");
const autherization=async (req, res, next)=>{
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).send("A token is required for authentication");
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token,config.TOKEN_KEY);
    const user_id=decoded.id
    const user = await userModel.findOne({ _id:user_id });
    if (user.role === 'admin') {
      //store admin id 
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
  module.exports = autherization;