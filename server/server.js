const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospital_booking";

mongoose.connect(MONGO_URI)
  .then(() => console.log(`✅ MongoDB Connected: ${MONGO_URI}`))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

