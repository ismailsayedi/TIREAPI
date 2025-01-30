const express = require('express');
const router = express.Router();
const Dealer = require('../models/Dealer');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const dealer = await Dealer.create({ email, password });
    res.status(201).json({ success: true, dealer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const dealer = await Dealer.findOne({ email });

  if (!dealer || !(await bcrypt.compare(password, dealer.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: dealer._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ success: true, token });
});

module.exports = router;