require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI; // Leer la cadena de conexión desde el .env
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Finalizar el proceso si no puede conectar
  }
};

module.exports = connectDB; // Exportar la función para usarla en otros archivos
