const Tire = require('../models/Tire');

async function calculateFitment(vehicleSpecs) {
  const { make, model, year, wheelDiameter } = vehicleSpecs;
  
  // Example logic (replace with real data)
  return Tire.find({
    'size.diameter': wheelDiameter,
    'size.width': { $gte: 200, $lte: 300 } // Example range
  });
}

module.exports = { calculateFitment };