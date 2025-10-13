const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB successfully connect: ${conn.connection.host}`);
    
    
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connect with error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnect');
    });

  } catch (error) {
    console.error('❌ MongoDB connection fail:', error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;