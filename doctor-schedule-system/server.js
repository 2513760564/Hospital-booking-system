const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDatabase = require('./config/database');


connectDatabase();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/doctors', require('./routes/doctorRoutes'));

// Basic Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'The server is operating normally.',
    timestamp: new Date().toISOString()
  });
});

app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 The server is running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`🏥 API address: http://localhost:${PORT}/api`);
});