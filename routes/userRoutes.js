// server/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Ruta para guardar los datos del usuario
router.post('/user', async (req, res) => {
  try {
    const { name, familyName, address, image } = req.body;

    // Crear un nuevo usuario
    const newUser = new User({
      name,
      familyName,
      address,
      image,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    // Responder con los datos del usuario guardado
    res.status(201).json({ message: 'Usuario guardado con éxito', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el usuario' });
  }
});

module.exports = router;
