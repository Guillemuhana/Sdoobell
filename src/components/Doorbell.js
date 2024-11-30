import React from "react";

const Doorbell = () => {
  const handleRing = async () => {
    try {
      await fetch("https://tu-backend.com/api/ring", {
        method: "POST",
        body: JSON.stringify({ houseId: "Casa-123" }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Timbre presionado");
    } catch (error) {
      console.error("Error al tocar el timbre:", error);
    }
  };

  return (
    <div>
      <h1>Timbre Digital</h1>
      <button onClick={handleRing}>Tocar el Timbre</button>
    </div>
  );
};

export default Doorbell;
