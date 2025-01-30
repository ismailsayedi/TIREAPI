const jwt = require('jsonwebtoken');
const Dealer = require('../models/Dealer');

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.dealer = await Dealer.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;