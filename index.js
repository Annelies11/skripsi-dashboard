const mqtt = require("mqtt");

const options = {
  host: "3e0d426bf006467090d5a8ec8038dc75.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "percobaan2",
  password: "Percobaandua2",
};

// initialize the MQTT client
const client = mqtt.connect(options);

// setup the callbacks
client.on("connect", function () {
  console.log("Connected");
});

client.on("error", function (error) {
  console.log(error);
});

client.on("message", function (topic, message) {
  // called each time a message is received
  console.log("Received message:", topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe("esp32/trimVal");

// publish message 'Hello' to topic 'my/test/topic'
client.publish("esp32/receive", "RED");
