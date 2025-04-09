window.addEventListener("load", () => {
  const ws = new WebSocket("ws://localhost:3000");

  // Buat Chart
  var chartDHT22 = new Highcharts.Chart({
    chart: { renderTo: "chart-dht22", type: "line" },
    title: { text: "DHT22 Temperature" },
    xAxis: { type: "datetime", dateTimeLabelFormats: { second: "%H:%M:%S" } },
    yAxis: { title: { text: "Temperature (°C)" } },
    series: [{ name: "Wind Temperature", data: [] }],
  });

  // Chart untuk MQ135
  var chartMQ135 = new Highcharts.Chart({
    chart: { renderTo: "chart-mq135", type: "line" },
    title: { text: "MQ135 Smoke Detector" },
    xAxis: { type: "datetime", dateTimeLabelFormats: { second: "%H:%M:%S" } },
    yAxis: { title: { text: "Part per million (ppm)" } },
    series: [{ name: "Smoke Concentration", data: [] }],
  });

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const topic = data.topic;
    const value = parseFloat(data.message);
    const x = new Date().getTime();

    if (topic === "esp32/dht22") {
      chartDHT22.series[0].addPoint(
        [x, value],
        true,
        chartDHT22.series[0].data.length > 40
      );
    } else if (topic === "esp32/mq135") {
      chartMQ135.series[0].addPoint(
        [x, value],
        true,
        chartMQ135.series[0].data.length > 40
      );
    }
    function fetchMQ135Value() {
      fetch("/api/mq135")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("mq135-value").innerText =
            data.value + " ppm";
        })
        .catch((error) => console.error("Error fetching MQ135 value:", error));
    }
    function fetchDHT22Value() {
      fetch("/api/dht22")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("dht22-value").innerText = data.value + " °C";
        })
        .catch((error) => console.error("Error fetching DHT22 value:", error));
    }
    // function fetchCrispVal() {
    //   fetch("/api/crispVal")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       document.getElementById("crispVal").innerText = data.value;
    //     })
    //     .catch((error) => console.error("Error fetching crisp value:", error));
    // }
    function fetchFanSpeed() {
      fetch("/api/fanSpeed")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("fanSpeed").innerText = data.value;
        })
        .catch((error) =>
          console.error("Error fetching fan speed value:", error)
        );
    }

    // Update nilai setiap 1 detik
    setInterval(fetchMQ135Value, 1000);
    setInterval(fetchDHT22Value, 1000);
    setInterval(fetchCrispVal, 1000);
    setInterval(fetchFanSpeed, 1000);
  };
});
