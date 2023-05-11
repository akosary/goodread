const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).send("A token is required for authentication");
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token,config.TOKEN_KEY);
    req.body.user_id = decoded.id; //store id of authenticated user in req
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
