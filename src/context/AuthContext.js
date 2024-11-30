import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Guardamos al usuario autenticado

  const login = (email, password) => {
    // Aquí va la lógica de autenticación
    // Simulamos un login exitoso con datos de ejemplo
    setUser({ name: 'Usuario de ejemplo' });  // En un caso real, debes usar la API para autenticar
  };

  const logout = () => {
    setUser(null);  // Limpiar el usuario cuando se cierra sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
