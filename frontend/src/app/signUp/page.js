"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import API from "../../../utils/api";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../../../contexts/AuthContext";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [organizations, setOrganizations] = useState([]);
  const router = useRouter();

  const { login } = useAuth();

  const [organization, setOrganization] = useState("");

  const [experiencedActivities, setExperiencedActivities] = useState([]);
  const [wantsToExperience, setWantsToExperience] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  const handleCreateUser = async () => {
    if (!firstName || !lastName || !password || !email) {
      alert("Please complete all fields before submitting.");
      return;
    }

    try {
      const res = await API.post("/users", {
        firstName,
        lastName,
        email,
        password,
        organization,
        experiencedActivities: experiencedActivities.map((a) => a.value),
        wantsToExperience: wantsToExperience.map((a) => a.value),
      });
      console.log("✅ User created:", res.data);

      login(res.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setOrganization("");
      setWantsToExperience([]);
      setExperiencedActivities([]);

      router.push("/");
    } catch (err) {
      console.error("❌ Error creating user:", err);
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

    const fetchOrganizations = async () => {
      try {
        const res = await API.get("/organizations");
        setOrganizations(res.data); // assuming API returns array of { _id, name }
      } catch (err) {
        console.error("Failed to fetch organizations", err);
      }
    };

    fetchOrganizations();
    fetchAllActivities();
  }, []);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="w-1/3 bg-white flex flex-col items-center justify-center p-10">
            <p className="text-5xl font-semibold">Sign Up</p>
            <p className="text-gray-500">Step {step}/3</p>
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
              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-black text-white"
                onClick={() => setStep(step + 1)}
              >
                Next Step
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-1/3 bg-white flex flex-col items-center justify-between py-10 h-3/5">
            <div className="flex flex-col items-center ">
              <p className="text-5xl m-2 font-semibold">More Info</p>
              <p className="text-gray-500">Step 2/4</p>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className=" w-full flex flex-col items-center justify-center m-2">
                <div className="w-3/4">
                  <p>First Name</p>
                </div>
                <input
                  className="border p-3 text-xl w-3/4 border-black"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center m-2">
                <div className="w-3/4">
                  <p>Last Name</p>
                </div>
                <input
                  className="border p-3 text-xl w-3/4 border-black"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center m-2">
                <div className="w-3/4">
                  <p>Organization</p>
                </div>
                <select
                  className="border p-3 text-xl w-3/4 border-black bg-white"
                  onChange={(e) => setOrganization(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an organization
                  </option>
                  {organizations.map((org) => (
                    <option key={org._id} value={org._id}>
                      {org.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-row w-100 justify-evenly">
              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-gray-500 text-white"
                onClick={() => setStep(step - 1)}
              >
                PREV{" "}
              </button>

              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-black text-white"
                onClick={() => setStep(step + 1)}
              >
                NEXT
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-1/3 bg-white flex flex-col items-center justify-center py-8">
            <p className="text-5xl text-center m-2 font-semibold">
              What activities are you experienced in?
            </p>
            <p className="text-gray-500">Step 3/4</p>

            <div className="w-full mt-4 flex flex-col justify-center items-center">
              <div className=" w-4/5 grid grid-cols-2 gap-2 rounded-md">
                {allActivities.map((activity) => {
                  const isChecked = experiencedActivities.some(
                    (a) => a.value === activity.value
                  );

                  const toggleCheckbox = () => {
                    if (isChecked) {
                      setExperiencedActivities(
                        (prev) =>
                          prev.filter((a) => a.value !== activity.value),
                        console.log("added")
                      );
                    } else {
                      setExperiencedActivities((prev) => [...prev, activity]);
                    }
                  };

                  return (
                    <div key={activity.value}>
                      <input
                        type="checkbox"
                        id={activity.value}
                        checked={isChecked}
                        onChange={toggleCheckbox}
                        className="peer hidden"
                      />
                      <label
                        htmlFor={activity.value}
                        className="inline-flex items-center justify-center w-full p-5 text-black bg-white border-2 border-black cursor-pointer peer-checked:bg-black peer-checked:text-white peer-checked:border-none hover:bg-gray-50 peer-checked:hover:bg-gray-700 transition ease-in-out"
                      >
                        {activity.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row w-4/5 justify-evenly m-8">
              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-gray-500 text-white"
                onClick={() => setStep(step - 1)}
              >
                PREV{" "}
              </button>

              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-black text-white"
                onClick={() => setStep(step + 1)}
              >
                NEXT
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-1/3 bg-white flex flex-col items-center justify-center py-8">
            <p className="text-5xl text-center m-2 font-semibold">
              What activities do you want to learn?
            </p>
            <p className="text-gray-500">Step 4/4</p>

            <div className="w-full  mt-4 flex flex-col justify-center items-center">
              <div className=" w-4/5 grid grid-cols-2 gap-2 rounded-md">
                {allActivities
                  .filter(
                    (activity) =>
                      !experiencedActivities.some(
                        (exp) => exp.value === activity.value
                      )
                  )
                  .map((activity) => {
                    const isChecked = wantsToExperience.some(
                      (a) => a.value === activity.value
                    );

                    const toggleCheckbox = () => {
                      if (isChecked) {
                        setWantsToExperience((prev) =>
                          prev.filter((a) => a.value !== activity.value)
                        );
                      } else {
                        setWantsToExperience((prev) => [...prev, activity]);
                      }
                    };

                    return (
                      <div key={activity.value}>
                        <input
                          type="checkbox"
                          id={activity.value}
                          checked={isChecked}
                          onChange={toggleCheckbox}
                          className="peer hidden"
                        />
                        <label
                          htmlFor={activity.value}
                          className="inline-flex items-center justify-center w-full p-5 text-black bg-white border-2 border-black cursor-pointer peer-checked:bg-black peer-checked:text-white peer-checked:border-none hover:bg-gray-50 peer-checked:hover:bg-gray-700 transition ease-in-out"
                        >
                          {activity.label}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-row w-4/5 justify-evenly m-8">
              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-gray-500 text-white"
                onClick={() => setStep(step - 1)}
              >
                PREV{" "}
              </button>

              <button
                className="w-1/2 p-4 text-xl border m-2 cursor-pointer bg-black text-white"
                onClick={handleCreateUser}
              >
                SUBMIT
              </button>
            </div>
          </div>
        );
      default:
        return <p>Invalid step</p>;
    }
  };

  return (
    <div
      className="flex flex-row items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/signupBackground.jpg')" }}
    >
      {renderStepContent()}
    </div>
  );
};

export default SignUpPage;
