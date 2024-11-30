const mongoose = require('mongoose');

// Definir el esquema del modelo de usuario
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  familyName: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String },  // URL de la imagen subida por el usuario
  qrCode: { type: String },  // Código QR del usuario
});

// Crear y exportar el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
