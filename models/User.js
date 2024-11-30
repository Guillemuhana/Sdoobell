// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  familyName: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true }, // URL de la imagen
});

const User = mongoose.model('User', userSchema);

module.exports = User;
