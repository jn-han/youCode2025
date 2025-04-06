"use client";
import React from "react";
import { useState, useEffect } from "react";
import API from "../../../utils/api";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const ClientSelect = dynamic(() => import("@/components/ClientSelect"), {
  ssr: false,
});

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="flex flex-row items-center justify-center w-full bg-amber-800 h-screen">
      <div className="w-1/3 bg-white flex flex-col items-center justify-center text-bold">
        <p className="text-4xl m-2">Sign Up</p>
        <p>Step 1/3</p>
        <div className="w-4/5 flex flex-col  items-center jutify-center m-2">
          <div className="w-3/4">
            <p>Email</p>
          </div>
          <input
            className="border p-3 text-xl w-3/4 border-black"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-4/5 flex flex-col  items-center jutify-center m-2">
          <div className="w-3/4">
            <p>Password</p>
          </div>
          <input
            className="border p-3 text-xl w-3/4 border-black"
            placeholder=""
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <hr className="w-2/4 h-px my-8 bg-black border-0 " />
        <div className="flex flex-col justify-center  w-4/5 items-center">
          <div className="p-2 m-2 w-3/4 border flex flex-row justify-center text-xl">
            <p>
              <span className="m-2">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </span>
              Sign in with Facebook
            </p>
          </div>
          <div className="p-2 m-2 w-3/4 border flex flex-row justify-center text-xl">
            <p>
              <span className="m-2">
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
              </span>
              Sign in with Google
            </p>
          </div>
          <div className="p-2 m-2 w-3/4 border flex flex-row justify-center text-xl">
            <p>
              <span className="m-2">
                <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
              </span>
              Sign in with Apple
            </p>
          </div>
          <button className="w-1/2 p-4 text-xl border m-1">Next Step</button>
        </div>
      </div>

      {/* <p>User Sign Up</p>
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
      </div> */}

      {/* <button className="font-primary" onClick={handleCreateUser}>
        Create User
      </button> */}
    </div>
  );
};

export default SignUpPage;
