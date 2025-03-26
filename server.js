const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mqtt = require("mqtt");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const options = {
  host: "3e0d426bf006467090d5a8ec8038dc75.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "percobaan2",
  password: "Percobaandua2",
};

// Initialize the MQTT client
const client = mqtt.connect(options);

client.on("connect", function () {
  console.log("Connected to MQTT Broker");
  client.subscribe("esp32/trimVal");
});

client.on("message", function (topic, message) {
  console.log("Received:", topic, message.toString());

  // Send received MQTT message to all WebSocket clients
  wss.clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ topic, message: message.toString() }));
    }
  });
});

// WebSocket connection for the frontend
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received from WebSocket:", message);

    // Publish to MQTT
    client.publish("esp32/receive", message);
  });
});

// Serve the HTML file
app.use(express.static("public"));

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
