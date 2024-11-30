// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  familyName: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true }, // URL de la imagen
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
