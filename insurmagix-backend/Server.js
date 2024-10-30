const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const multer = require('multer');


// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded



// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Define the uploads directory
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
  }
});
const upload = multer({ storage });


// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this for production
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

// Import routes
const authRoutes = require('./routes/authRoutes');
const policyRoutes = require('./routes/policyRoutes');
const userAccountRoutes = require('./routes/userAccountRoutes');
const treatmentRoutes = require('./routes/treatments');
const authorizationRoutes = require('./routes/authorizationRoutes');



app.use('/api/auth', authRoutes);
app.use('/api/policy', policyRoutes);
app.use('/api/user', userAccountRoutes);
app.use('/api', treatmentRoutes);
app.use('/api', authorizationRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Server Error' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // If you're sending form data


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
