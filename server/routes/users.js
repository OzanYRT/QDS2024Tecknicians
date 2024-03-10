const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const path = require('path');
const fs = require('fs');

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

router.post('/add-scholarship', async (req, res) => {
  const { email, scholarshipName } = req.body;
  console.log(email)
  console.log(scholarshipName)

  if (!email || !scholarshipName) {
    return res.status(400).send("Missing email or scholarship name.");
  }

  try {
    // Add the scholarship to the user's document using $addToSet to avoid duplicates
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { $addToSet: { scholarships: scholarshipName }},
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }

    res.json({ message: "Scholarship added successfully.", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the scholarship.");
  }
});

router.get('/scholarships/:email', async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).send("Missing email.");
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }
    res.json(user.scholarships);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the scholarships.");
  }
});

const { exec } = require('child_process');

// generate a PDF
router.get('/generatePdf', (req, res) => {
  // Call the process_scholarships.py script to generate the PDF
  const { scholarshipName, userData } = req.query; // Extract the scholarship name and user data from query parameters
    exec(`python ../process_scholarships.py "${scholarshipName}" '${userData}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error generating the PDF');
        }

    // Define the path to the PDF file
    const pdfPath = path.join(__dirname, '../scholarship_essay.pdf');

    // Check if the file exists before trying to send it
    if (fs.existsSync(pdfPath)) {
      // Set the headers and send the file
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=scholarship_essay.pdf');
      fs.createReadStream(pdfPath).pipe(res);
    } else {
      // If the file does not exist, send an error message
      res.status(404).send('The PDF file was not found.');
    }
  });
});

module.exports = router;
