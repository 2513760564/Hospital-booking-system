// server/server.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 模拟数据库连接（你可替换成真实的 mongoose.connect）
console.log('[dotenv@17.2.3] injecting env (2) from .env -- tip: add secrets lifecycle management: https://dotenv.org/ops');
console.log('(node:52190) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option...');
console.log('(node:52190) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option...');

app.get('/api', (req, res) => {
  res.json({ success: true, message: 'API root reached' });
});

app.listen(PORT, () => {
  console.log('🚀 The server is running on port', PORT);
  console.log('📡 Environment:', process.env.NODE_ENV || 'undefined');
  console.log('🌐 API address: http://localhost:' + PORT + '/api');
  console.log('✅ MongoDB Connected: 127.0.0.1');
});
