const express = require("express");
const cors = require("cors");
const contractRoutes = require("./routes/contractRoutes");
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require("./db/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/contracts", contractRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
