require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mqtt = require("mqtt");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const options = {
  host: process.env.MQTT_HOST,
  port: process.env.MQTT_PORT,
  protocol: "mqtts",
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
};

let lastMQ135Value = "Waiting for data...";
let lastDHTValue = "Waiting for data...";
// let lastCrispVal = "Waiting for data...";
let lastFanSpeed = "Waiting for data...";

// Inisialisasi MQTT
const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Connected to MQTT Broker");
  client.subscribe("esp32/dht22");
  client.subscribe("esp32/mq135");
  // client.subscribe("esp32/crispVal");
  client.subscribe("esp32/fanSpeed");
});

client.on("message", function (topic, message) {
  console.log("Received:", topic, message.toString());

  if (topic === "esp32/mq135") {
    lastMQ135Value = message.toString();
  }
  if (topic === "esp32/dht22") {
    lastDHTValue = message.toString();
  }
  // if (topic === "esp32/crispVal") {
  //   lastCrispVal = message.toString();
  // }
  if (topic === "esp32/fanSpeed") {
    lastFanSpeed = message.toString();
  }

  // Kirim data ke semua klien WebSocket
  wss.clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ topic, message: message.toString() }));
      //   ws.send(message.toString());
    }
    // if (ws.readyState === WebSocket.OPEN) {
    //   ws.send(JSON.stringify({ topic, message: message.toString() }));
    //   // ws.send(message.toString());
    // }
  });
});

// WebSocket untuk komunikasi dengan frontend
wss.on("connection", (ws) => {
  console.log("WebSocket Client Connected");
  ws.on("message", (message) => {
    console.log("Received from WebSocket:", message);

    // Publish to MQTT
    client.publish("esp32/receive", message);
  });
});

// API untuk AJAX mengambil nilai MQ135 terbaru
app.get("/api/mq135", (req, res) => {
  res.json({ value: lastMQ135Value });
});
app.get("/api/dht22", (req, res) => {
  res.json({ value: lastDHTValue });
});
// app.get("/api/crispVal", (req, res) => {
//   res.json({ value: lastCrispVal });
// });
app.get("/api/fanSpeed", (req, res) => {
  res.json({ value: lastFanSpeed });
});

app.use(express.static("public")); // Sajikan file HTML

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
