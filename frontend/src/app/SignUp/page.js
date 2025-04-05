"use client";
import React from "react";
import { useState } from "react";
import API from "../../../utils/api";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = async () => {
    try {
      const res = await API.post("/users", { name, email });
      console.log("User created:", res.data);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default SignUpPage;
