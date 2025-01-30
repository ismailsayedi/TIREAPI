const express = require('express');
const router = express.Router();
const Tire = require('../models/Tire');
const auth = require('../middleware/auth');

// Add tire (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const tire = await Tire.create({ ...req.body, dealer: req.dealerId });
    res.status(201).json(tire);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tires for logged-in dealer
router.get('/', auth, async (req, res) => {
  const tires = await Tire.find({ dealer: req.dealerId });
  res.json(tires);
});
const express = require('express');
const { calculateFitment } = require('../services/fitment');

router.post('/fitment', async (req, res) => {
  try {
    const tires = await calculateFitment(req.body);
    res.json(tires);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
