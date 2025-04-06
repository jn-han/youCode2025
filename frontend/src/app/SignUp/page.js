"use client";
import React from "react";
import { useState, useEffect } from "react";
import API from "../../../utils/api";
import dynamic from "next/dynamic";

const ClientSelect = dynamic(() => import("@/components/ClientSelect"), {
  ssr: false,
});

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [experiencedActivities, setExperiencedActivities] = useState([]);
  const [wantsToExperience, setWantsToExperience] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const topThreeOptions = allActivities.slice(0, 3); // first 3 for now

  const loadOptions = async (inputValue) => {
    try {
      const res = await API.get(`/activities?search=${inputValue}`);
      return res.data.map((activity) => ({
        label: activity.name,
        value: activity._id,
      }));
    } catch (err) {
      console.error("Failed to fetch activities", err);
      return [];
    }
  };
  const handleCreateUser = async () => {
    try {
      const res = await API.post("/users", {
        firstName,
        lastName,
        email,
        experiencedActivities: experiencedActivities.map((a) => a.value),
        wantsToExperience: wantsToExperience.map((a) => a.value),
      });
      console.log("User created:", res.data);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  useEffect(() => {
    const fetchAllActivities = async () => {
      const res = await API.get("/activities");
      const formatted = res.data.map((activity) => ({
        label: activity.name,
        value: activity._id,
      }));
      setAllActivities(formatted);
    };

    fetchAllActivities();
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center w-full">
      <p>User Sign Up</p>
      <div className="flex flex-row justify-between w-100">
        <div className="">
          <p>First Name</p>
          <input
            className="border border-black rounded-sm"
            placeholder="Name"
            onChange={(e) => setLastName(lastName)}
          />
        </div>
        <div>
          <p>Last Name</p>
          <input
            className="border border-black rounded-sm"
            placeholder="Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-100">
        <p>Email</p>
        <input
          className="border border-black rounded-sm"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-100">
        <p>What activities are you experienced in?</p>
        <ClientSelect
          value={experiencedActivities}
          onChange={setExperiencedActivities}
          loadOptions={loadOptions}
          topThreeOptions={topThreeOptions}
        />
      </div>
      <div className="w-100">
        <p>What do you want to experience in the future?</p>
        <ClientSelect
          value={wantsToExperience}
          onChange={setWantsToExperience}
          loadOptions={loadOptions}
          topThreeOptions={topThreeOptions}
        />
      </div>

      <button className="font-primary" onClick={handleCreateUser}>
        Create User
      </button>
    </div>
  );
};

export default SignUpPage;
