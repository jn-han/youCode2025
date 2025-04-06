"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const EventPage = ({
  name,
  host,
  datetime,
  image = "/hiking.png",
  details,
  gear = [],
  location,
}) => {
  const [weather, setWeather] = useState(null);
  const dateObj = new Date(datetime);
  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  const time = dateObj.toLocaleTimeString("en-US", options);
  const city = extractCity(location);
  function extractCity(address) {
    const parts = address.split(",").map((part) => part.trim());
    // If the first part starts with a digit, assume it's the street address,
    // so return the second part as the city.
    if (parts[0] && /^\d/.test(parts[0])) {
      return parts[1] || address;
    }
    // Otherwise, just return the first part.
    return parts[0] || address;
  }
  const date = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const fetchWeather = async () => {
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();
      console.log("🌦️ Weather API Response:", data);
      setWeather(data);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Rain":
        return faCloudRain;
      case "Clouds":
        return faCloud;
      case "Clear":
        return faSun;
      case "Snow":
        return faSnowflake;
      case "Thunderstorm":
        return faBolt;
      case "Drizzle":
        return faCloudRain;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return faSmog;
      default:
        return faSun; // fallback
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="font-primary mx-24">
      <div className="grid grid-cols-[80%_20%] pt-14">
        <h1 className="text-3xl">{name}</h1>
        <div className="flex items-center space-x-2 justify-end">
          <p>Hosted by {host}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-14"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="relative w-full h-[450px]">
        <Image
          src={image}
          alt={"alternate"}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="grid grid-cols-[70%_30%]">
        <div>
          <div>
            <h1 className="text-3xl font-bold pt-12 pb-8">Event Details</h1>
            <p>{details}</p>
          </div>

          <div>
            <h1 className="mt-20 font-bold text-2xl">What to bring</h1>
            <ul className="list-disc list-inside">
              {gear.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold pt-14">
              Don't have these items?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {["/ad.png", "/ad2.png", "/ad3.png"].map((src, idx) => (
                <figure key={idx}>
                  <img src={src} alt={`ad${idx + 1}`} className="rounded-md" />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div>
          <button className="my-4 w-full bg-navbar text-white">
            <p className="p-2">Register</p>
          </button>

          <div>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Location: {city}</p>
          </div>
          <div>
            <p className="text-xl font-semibold mt-6">
              Current Weather Forecast ({city})
            </p>

            {weather && weather.main ? (
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-row items-center gap-4 w-100 justify-between">
                  <FontAwesomeIcon
                    icon={getWeatherIcon(weather.weather?.[0]?.main)}
                    size="3x"
                  />
                  <p className="text-2xl">{weather.main.temp}°C</p>
                  <div className="flex flex-col">
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Condition: {weather.weather?.[0]?.description}</p>
                  </div>
                </div>
              </div>
            ) : weather?.message ? (
              <p>Error: {weather.message}</p>
            ) : (
              <p>Loading weather...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
