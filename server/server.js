const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully using Mongoose"))
  .catch(err => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 5000;

// Importing routes
const userRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

// Using routes
app.use('/api', userRoutes); // This will prefix '/api' to our routes in users.js

// Other routes setup
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});