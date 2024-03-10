const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const path = require('path');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  console.log("Register called");
  try {
    const { username, email, password, interests, aboutme } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Convert interests from a comma-separated string to an array, if necessary
    const interestsArray = interests ? interests.split(',') : [];

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      interests: interestsArray,
      aboutme,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error registering new user' });
  }
});

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

      // Respond with success
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in user' });
    }
  });

// Fetch user data endpoint
router.get('/:email', async (req, res) => {
  try {
    const email = req.params.email;

    // Fetch user data by email, excluding the password for security
    const userData = await User.findOne({ email }, { password: 0 });

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

// Update user data endpoint
router.put('/update/:email', async (req, res) => {
  const { email } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate({ email }, updateData, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude password from the response for security
    const { password, ...userWithoutPassword } = updatedUser.toObject();
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Error updating user data' });
  }
});

// Endpoint to download a generated PDF
router.get('/download_essay', (req, res) => {
  // Define the path to the PDF file
  const pdfPath = path.join(__dirname, '../scholarship_essay.pdf');

  // Set the headers to indicate that the browser should download the file
  res.download(pdfPath, 'scholarship_essay.pdf', (err) => {
    if (err) {
      // Handle error, but don't expose to the client
      console.error(err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

module.exports = router;
