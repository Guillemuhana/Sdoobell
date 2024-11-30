// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta que recibe la ID del usuario desde el QR
app.get('/timbre/:id', (req, res) => {
  const userId = req.params.id;
  
  // Lógica para obtener los datos del usuario desde la base de datos
  // Aquí deberías acceder a la base de datos (MongoDB) y obtener los datos del usuario
  // Suponiendo que ya tienes una función que obtiene los datos por ID

  // Ejemplo de datos simulados (deberías reemplazar esto con la base de datos)
  const user = {
    name: 'Juan',
    familyName: 'Pérez',
    address: 'Calle Ficticia 123',
    image: 'http://path-to-image.com/imagen.jpg', // URL de la imagen del usuario
  };

  // Responder con los datos del timbre
  res.send(`
    <h1>Detalle del Timbre</h1>
    <p>Nombre: ${user.name} ${user.familyName}</p>
    <p>Dirección: ${user.address}</p>
    <img src="${user.image}" alt="Imagen del Usuario" />
    <br />
    <button>Presiona para timbrar</button>
  `);
});

// Iniciar el servidor en la IP local y puerto 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});
