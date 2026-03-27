const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  path: String,
  userAgent: String,
  ip: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visit', VisitSchema);
