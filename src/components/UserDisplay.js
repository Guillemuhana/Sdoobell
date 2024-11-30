import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDisplay = () => {
  const { id } = useParams();  // Obtener el ID de la URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        setUser(response.data);  // Guardamos los datos del usuario
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUserData();
  }, [id]);  // Asegurarse de que la petición se haga cuando el ID cambie

  if (!user) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{user.name} {user.familyName}</h1>
      <p>{user.address}</p>
      <img src={user.image} alt="Casa" style={{ width: '100%', height: 'auto' }} />
      <button>Botón de Timbre</button>
    </div>
  );
};

export default UserDisplay;
