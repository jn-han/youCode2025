"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const EventPage = ({
  name,
  host,
  image = "/hiking.png",
  details,
  gear = [],
}) => {
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
          alt={name}
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
          <button className="mt-4 w-full bg-navbar text-white">
            <p className="p-2">Register</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
