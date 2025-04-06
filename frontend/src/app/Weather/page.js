"use client";

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && weather.main ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather?.[0]?.description}</p>
        </div>
      ) : weather?.message ? (
        <p>Error: {weather.message}</p>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
