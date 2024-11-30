import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import CPanel from './components/Cpanel';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginRedirect />} />
        <Route path="/cpanel" element={<PrivateRoute><CPanel /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
};

const LoginRedirect = () => {
  const { user, loading } = useAuth();  // Verificamos si el usuario está autenticado

  if (loading) {
    return null; // Mientras estamos verificando, no renderizamos nada
  }

  if (user) {
    return <Navigate to="/cpanel" />;  // Si el usuario está autenticado, redirigimos a /cpanel
  }

  return <Login />;  // Si no está autenticado, mostramos el login
};

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();  // Verificamos si el usuario está autenticado

  if (loading) {
    return null; // Mientras estamos verificando, no renderizamos nada
  }

  if (!user) {
    return <Navigate to="/" />;  // Si no está autenticado, redirigimos al login
  }

  return children;  // Si está autenticado, mostramos el CPanel
};

export default App;
