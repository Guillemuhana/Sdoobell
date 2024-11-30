// routes/clientRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Ruta para obtener los datos de un usuario por ID
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // Buscar el usuario por ID

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los datos del usuario" });
  }
});

module.exports = router;
