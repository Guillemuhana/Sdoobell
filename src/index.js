import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usar createRoot en lugar de render

root.render(
  <Router> {/* Solo un Router aquí */}
    <App />
  </Router>
);
