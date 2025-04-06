"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import API from "../../../utils/api";
import { useRouter } from "next/navigation";

const Select = dynamic(() => import("react-select"), { ssr: false });

const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
});

const libraries = ["places"];

const CreateEvent = () => {
  const [users, setUsers] = useState([]);
  const [selectedHosts, setSelectedHosts] = useState([]);
  const [gear, setGear] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [details, setDetails] = useState("");
  const router = useRouter();

  const autocompleteRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        const userOptions = res.data.map((user) => ({
          label: `${user.firstName} ${user.lastName}`,
          value: user._id,
        }));
        setUsers(userOptions);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setEventLocation(place.formatted_address);
    }
  };

  const handleCreateEvent = async () => {
    if (!firstName || !lastName || !password || !email) {
      alert("Please complete all fields before submitting.");
      return;
    }

    try {
      const res = await API.post("/users", {
        eventName,
        eventDate,
        eventLocation,
        host,
        organization,
        difficulty,
        eventDetails,
        whatToBring,
      });
      console.log("✅ User created:", res.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setOrganization("");
      setWantsToExperience([]);
      setExperiencedActivities([]);

      router.push("./confirmation");
    } catch (err) {
      console.error("❌ Error creating user:", err);
    }
  };

  const handleSubmit = () => {
    console.log({
      eventName,
      eventDate,
      eventLocation,
      difficulty,
      details,
      hostIds: selectedHosts.map((host) => host.value),
    });
  };

  return (
    <div className="p-10 w-full max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Create Event</h1>

      <div className="mb-4">
        <label>Name of Event</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Date of Event</label>
        <input
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Location of Event</label>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        >
          <Autocomplete
            onLoad={(auto) => (autocompleteRef.current = auto)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Search location..."
              className="border p-2 w-full"
            />
          </Autocomplete>
        </LoadScript>
        {eventLocation && <p className="text-sm mt-2">📍 {eventLocation}</p>}
      </div>

      <div className="mb-4">
        <label>Additional Hosts</label>
        <Select
          isMulti
          options={users}
          value={selectedHosts}
          onChange={setSelectedHosts}
          placeholder="Search for users..."
          className="text-black"
          filterOption={(option, inputValue) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          }
        />
      </div>

      <div className="mb-4">
        <label>Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select difficulty</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-4">
        <label>Event Details</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Tell us more about the event..."
          className="border p-2 w-full"
        />
      </div>

      <label>What to Bring</label>

      <CreatableSelect
        isMulti
        value={gear}
        onChange={setGear}
        placeholder="What to bring"
        className="text-black"
        options={[
          { label: "Backpack", value: "Backpack" },
          { label: "Rain Jacket", value: "Rain Jacket" },
          { label: "Umbrella", value: "Umbrella" },
          { label: "Climbing Harness", value: "Climbing Harness" },
          { label: "Crash Pads", value: "Crash Pads" },
        ]}
        isClearable
        onCreateOption={(inputValue) => {
          const newOption = { label: inputValue, value: inputValue };
          setGear((prev) => [...prev, newOption]);
        }}
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Create Event
      </button>
    </div>
  );
};

export default CreateEvent;
