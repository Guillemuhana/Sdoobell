import './Cpanel.css';

import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Asegúrate de importar correctamente
import Logo from './Imagenes/Logo.png';

const Cpanel = () => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    image: null,
    qrCode: null,
  });
  const [showForm, setShowForm] = useState(true);
  const [qrData, setQrData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Asignar un ID único para el usuario (puede ser un número, como Date.now())
    const userId = Date.now(); 

    // Crear el contenido del QR, cambiando localhost por la IP local
    const qrContent = `http://192.168.1.6:3000/timbre/${userId}`;  // Asegúrate de que la IP sea la correcta

    // Actualizar el estado con el contenido del QR
    setQrData(qrContent);

    // Guardar la URL del QR en los datos del usuario
    setUserData({ ...userData, qrCode: qrContent });
    
    // Mostrar los detalles del usuario en lugar del formulario
    setShowForm(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, image: URL.createObjectURL(file) });
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qrCodeCanvas');
    const dataUrl = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'user_qr.png';
    a.click();
  };

  const handleLogout = () => {
    setUserData({ name: '', address: '', phone: '', email: '', image: null, qrCode: null });
    setShowForm(true);
  };

  return (
    <div className="cpanel-container">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>Bienvenido al CPanel</h2>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            placeholder="Familia"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Dirección"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input type="file" onChange={handleImageChange} />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <div className="user-info">
          <div className="user-image-container">
            {userData.image && <img src={userData.image} alt="User" className="user-image" />}
          </div>
          <div className="user-details">
            <h3>Familia: {userData.name}</h3>
            <p>Dirección: {userData.address}</p>
            <p>Teléfono: {userData.phone}</p>
            <p>Email: {userData.email}</p>
          </div>
          <div className="qr-container">
            {qrData && <QRCodeCanvas id="qrCodeCanvas" value={qrData} size={128} />}
            <button onClick={downloadQR}>Descargar QR</button>
          </div>
        </div>
      )}

      <button onClick={handleLogout} className="logout-btn">Cerrar Sesión</button>
    </div>
  );
};

export default Cpanel;
