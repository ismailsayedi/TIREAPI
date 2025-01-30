// backend/routes/embed.js
const express = require('express');
const router = express.Router();
const Dealer = require('../models/Dealer');

// Serve dealer-specific widget config
router.get('/:dealerId', async (req, res) => {
  try {
    const dealer = await Dealer.findById(req.params.dealerId);
    res.json({
      widgetColor: dealer.embedConfig.widgetColor,
      allowedDomains: dealer.embedConfig.allowedDomains
    });
  } catch (err) {
    res.status(404).json({ error: 'Dealer not found' });
  }
});

module.exports = router;