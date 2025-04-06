"use client";

import { useState } from "react";

export default function forecast() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  const fetchForecast = async () => {
    const res = await fetch(`/api/forecast?city=${city}`);
    const data = await res.json();
    setForecast(data);
  };

  return (
    <div>
      <h1>5-Day Forecast</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchForecast}>Get Forecast</button>

      {forecast?.list ? (
        <div>
          {forecast.list.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <strong>{item.dt_txt}</strong>
              <p>Temp: {item.main.temp}°C</p>
              <p>Condition: {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      ) : (
        forecast?.message && <p>Error: {forecast.message}</p>
      )}
    </div>
  );
}
