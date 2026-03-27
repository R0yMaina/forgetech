require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Models
const Subscriber = require('./models/Subscriber');
const Contact = require('./models/Contact');
const Visit = require('./models/Visit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tracking Middleware
app.use(async (req, res, next) => {
  // Track only page loads (ignore API and assets)
  if (!req.path.startsWith('/api') && !req.path.includes('.')) {
    try {
      const visit = new Visit({
        path: req.path,
        userAgent: req.get('User-Agent'),
        ip: req.ip
      });
      await visit.save();
    } catch (err) {
      console.error('Visit track error:', err);
    }
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/forgetech';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Newsletter Route
app.post('/api/newsletter', async (req, res) => {
  const { name, email } = req.body;
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Valid email is required.' });
  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email is already subscribed.' });
    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();
    res.json({ message: 'Subscribed successfully!', id: newSubscriber._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { fullName, email, serviceType, message } = req.body;
  if (!email || !fullName) return res.status(400).json({ error: 'Name and Email are required.' });
  try {
    const newContact = new Contact({ fullName, email, serviceType, message });
    await newContact.save();
    res.json({ message: 'Message sent successfully!', id: newContact._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin Stats Route (Protected)
app.get('/api/admin/stats', async (req, res) => {
  const password = req.headers['x-admin-password'];
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  try {
    const totalVisits = await Visit.countDocuments();
    const totalSubscribers = await Subscriber.countDocuments();
    const totalContacts = await Contact.countDocuments();
    
    // Last 30 days visits daily breakdown (simulated for now)
    const recentVisits = await Visit.find().sort({ date: -1 }).limit(10);
    const recentContacts = await Contact.find().sort({ date: -1 }).limit(10);
    const recentSubscribers = await Subscriber.find().sort({ date: -1 }).limit(10);

    res.json({
      counts: { visits: totalVisits, subscribers: totalSubscribers, contacts: totalContacts },
      recent: { visits: recentVisits, contacts: recentContacts, subscribers: recentSubscribers }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Fallback to index.html for undefined routes (SPA behavior if needed)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Admin route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
