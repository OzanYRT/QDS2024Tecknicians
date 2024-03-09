const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  console.log("Register called");
  try {
    const { username, email, password, interests } = req.body;
    console.log(req.body);

    // Check if user exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      interests,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error registering new user' });
  }
});

module.exports = router;

// Login endpoint
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User does not exist' });
      }
  
      // Validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Respond with success (Consider implementing JWT for secure sessions)
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in user' });
    }
  });
  