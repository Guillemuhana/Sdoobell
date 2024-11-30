import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";

const Timbre = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
      .then((response) => {
        console.log('Respuesta de la API:', response);
        if (response.status === 200) {
          setUserData(response.data.user);
        } else {
          console.error('Respuesta inesperada:', response);
          setError('Respuesta inesperada');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, [id]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>No se encontraron datos para el usuario.</p>;
  }

  return (
    <div>
      <h1>{userData.name} {userData.familyName}</h1>
      <p>Dirección: {userData.address}</p>
      <img src={userData.image} alt="Imagen del usuario" />
      <button onClick={() => alert('Timbre presionado!')}>Timbre</button>
    </div>
  );
};

export default Timbre;
