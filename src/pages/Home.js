import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Timbre Digital</h1>
      <nav>
        <ul>
          <li>
            <Link to="/generate-qr">Generar Código QR</Link>
          </li>
          <li>
            <Link to="/scan-qr">Escanear QR</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
