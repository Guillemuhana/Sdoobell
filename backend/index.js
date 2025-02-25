const WebSocket = require("ws");
const express = require("express");

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  ws.on("message", (message) => {
    console.log("Timbre activado:", message);
    ws.send("Notificación: Alguien tocó el timbre.");
  });
});

app.post("/api/ring", (req, res) => {
  console.log("Timbre presionado para casa:", req.body.houseId);
  res.status(200).send("Timbre activado");
});

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
