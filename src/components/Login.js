import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/cpanel');
    } catch (error) {
      console.error('Error al iniciar sesión', error.message);
    }
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <div className="login-header">
          
           <img src={require('../components/Imagenes/Logo.png')} alt="Logo" className="login-logo" /> 
                    
          <h1 className="login-title">Iniciar sesión</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Iniciar sesión
          </button>
          <p className="login-footer">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
