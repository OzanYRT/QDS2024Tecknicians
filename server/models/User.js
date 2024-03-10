const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  interests: [String],
  aboutme: { type: String},
  // collection of scholarships that the user is interested in
  scholarships: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
