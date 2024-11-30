import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const GenerateQR = () => {
  const [houseId, setHouseId] = useState("");

  const qrValue = houseId
    ? `http://localhost:3000/timbre/${houseId}`
    : "Identificador inválido";

  return (
    <div>
      <h1>Generador de Código QR</h1>
      <input
        type="text"
        placeholder="Identificador de la Casa"
        value={houseId}
        onChange={(e) => setHouseId(e.target.value)}
      />
      {houseId && (
        <>
          <QRCodeCanvas value={qrValue} />
          <p>URL QR generada: {qrValue}</p>
        </>
      )}
    </div>
  );
};

export default GenerateQR;
