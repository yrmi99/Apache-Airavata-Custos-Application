// define schema (structure of our database)

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create a model for the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
