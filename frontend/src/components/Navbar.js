"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();

  const linkStyle = (path) => (pathname === path ? "underline" : "");

  return (
    <div className="flex items-center justify-between bg-navbar text-white h-20 px-8 text-xl font-primary">
      <div>
        <p className="text-2xl font-semibold">Arc'connect</p>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/explore/all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
        <Link
          href="/home"
          className={`${linkStyle("/home")} ${
            pathname !== "/home" ? "hover-underline-animation" : ""
          }`}
        >
          HOME
        </Link>
        <Link
          href="/hub"
          className={`${linkStyle("/hub")} ${
            pathname !== "/hub" ? "hover-underline-animation" : ""
          }`}
        >
          MY HUB
        </Link>
        <Link
          href="/createEvent"
          className={`${linkStyle("/createEvent")} ${
            pathname !== "/createEvent" ? "hover-underline-animation" : ""
          }`}
        >
          CREATE
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center space-x-2">
            <p>Welcome, {user?.firstName || "User"}</p>
            <button onClick={logout} className="underline">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/signUp">SIGN UP</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
