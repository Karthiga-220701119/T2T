const express = require("express");
const cors = require("cors");
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const requestRoutes = require('./routes/requestRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Route middleware
app.use("/api", authRoutes);
app.use("/api", requestRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));
