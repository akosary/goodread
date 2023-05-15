const Rate = require("../models/rate");

const getRate = async (req, res, next) => {
  let rate;
  try {
    rate = await Rate.findById(req.params.id);
    if (rate == null) {
      return res.status(404).json({ message: "Cannot find rate" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.rate = rate;
  next();
};

module.exports = getRate;
