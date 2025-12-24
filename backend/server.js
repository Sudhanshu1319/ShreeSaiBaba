// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shirdi-mandir', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Models
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  additionalInfo: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const prasadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  occasion: String,
  numberOfPeople: Number,
  amount: Number,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  purpose: String,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);
const Prasad = mongoose.model('Prasad', prasadSchema);
const Contact = mongoose.model('Contact', contactSchema);
const Donation = mongoose.model('Donation', donationSchema);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Shirdi Sai Mandir API is running' });
});

// Bookings Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ 
      success: true, 
      message: 'Booking created successfully', 
      booking 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error creating booking', 
      error: error.message 
    });
  }
});

app.get('/api/bookings/:email', async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.params.email })
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error fetching bookings', 
      error: error.message 
    });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error fetching bookings', 
      error: error.message 
    });
  }
});

// Prasad Routes
app.post('/api/prasad', async (req, res) => {
  try {
    const prasad = new Prasad(req.body);
    await prasad.save();
    res.status(201).json({ 
      success: true, 
      message: 'Prasad booking created successfully', 
      prasad 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error creating prasad booking', 
      error: error.message 
    });
  }
});

app.get('/api/prasad/calendar', async (req, res) => {
  try {
    const { month, year } = req.query;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);
    
    const bookings = await Prasad.find({
      date: { $gte: startDate, $lte: endDate }
    });
    
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error fetching prasad calendar', 
      error: error.message 
    });
  }
});

app.get('/api/prasad/:email', async (req, res) => {
  try {
    const prasadBookings = await Prasad.find({ email: req.params.email })
      .sort({ createdAt: -1 });
    res.json({ success: true, prasadBookings });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error fetching prasad bookings', 
      error: error.message 
    });
  }
});

// Contact Routes
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error sending message', 
      error: error.message 
    });
  }
});

// Donations Routes
app.post('/api/donations', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ 
      success: true, 
      message: 'Donation recorded successfully', 
      donation 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error processing donation', 
      error: error.message 
    });
  }
});

app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json({ success: true, donations });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Error fetching donations', 
      error: error.message 
    });
  }
});

// Timings Route
app.get('/api/timings', (req, res) => {
  res.json({
    success: true,
    timings: {
      weekdays: {
        morning: '7:00 AM - 12:00 PM',
        evening: '5:00 PM - 9:00 PM'
      },
      thursday: {
        morning: '7:00 AM - 12:00 PM',
        evening: '5:00 PM - 10:00 PM'
      },
      weekend: {
        morning: '7:00 AM - 12:00 PM',
        evening: '5:00 PM - 9:00 PM'
      }
    },
    aarti: [
      { name: 'Kakad Aarti', time: '7:00 AM' },
      { name: 'Madhyan Aarti', time: '12:00 PM' },
      { name: 'Dhoop Aarti', time: '6:00 PM' },
      { name: 'Shej Aarti', time: '9:00 PM' }
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!', 
    error: err.message 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;