const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);
