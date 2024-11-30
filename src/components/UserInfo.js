import React from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();

  const handleRingBell = () => {
    fetch(`http://localhost:5000/ring/${userId}`, { method: "POST" })
      .then(() => alert("¡Notificación enviada al usuario!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Información del Usuario</h1>
      <p><strong>ID del Usuario:</strong> {userId}</p>
      <p>Nombre: Juan Pérez</p>
      <p>Dirección: Calle Falsa 123</p>
      <button onClick={handleRingBell} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Tocar Timbre
      </button>
    </div>
  );
};

export default UserInfo;
