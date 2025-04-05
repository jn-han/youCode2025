"use client";

import { useEffect, useState } from "react";
import API from "../../../utils/api";
export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
