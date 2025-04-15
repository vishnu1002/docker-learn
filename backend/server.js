const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/notes-app";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Import routes
const noteRoutes = require("./routes/noteRoutes");

// Use routes
app.use("/api/notes", noteRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Notes API" });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend Running: http://localhost:${PORT}`);
});
