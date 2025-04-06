import React from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import GroupCard from "@/components/GroupCard";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-24 mt-14">
        <h1 className="text-4xl"> Explore</h1>
        <p className="mb-14">
          Use this page to search for keywords that interest you, or specific
          events and groups. Filter on search to narrow your view to Groups or
          Events.
        </p>
        <div className="flex gap-8 mb-16">
          <div class="w-full max-w-md border flex">
            <div class="relative group">
              <button class="bg-black text-white px-4 py-2 flex items-center text-center gap-1">
                All
                <svg class="w-3 h-3" fill="white" viewBox="0 0 20 20">
                  <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                </svg>
              </button>

              <ul className="absolute mt-1 w-full bg-white border shadow-md hidden group-hover:block text-center">
                <li className=" py-2 hover:bg-gray-100 cursor-pointer">All</li>
                <li className=" py-2 hover:bg-gray-100 cursor-pointer">
                  Groups
                </li>
                <li className=" py-2 hover:bg-gray-100 cursor-pointer">
                  Events
                </li>
              </ul>
            </div>

            <div className="flex flex-grow items-center px-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-2 focus:outline-none"
              />
              <svg
                className="w-5 h-5 text-black cursor-pointer"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
          </div>
          <div class="w-full max-w-md border flex">
            <div className="flex flex-grow items-center px-2">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-2 py-2 focus:outline-none"
              />
              <svg
                className="w-5 h-5 text-black cursor-pointer"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
          </div>
          <div class="w-50 max-w-md border flex">
            <div className="flex flex-grow items-center px-2">
              <input
                type="text"
                placeholder="DD/MM/YYY"
                className="w-full px-2 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">

    <EventCard
        imageSrc="/event1.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
      <EventCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
     <GroupCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}

      />
      <GroupCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}

      />
      <GroupCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}

      />
      <GroupCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}

      />
            <EventCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
            <EventCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
            <EventCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
            <EventCard
        imageSrc="/event3.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
          <EventCard
        imageSrc="/event1.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />
          <EventCard
        imageSrc="/event1.png"
        imageAlt="Moms hiking"
        eventName="Hike with Moms"
        description="Join us for a refreshing group hike at Grouse Mountain!"
        attendeeCount={14}
        date="4/30/2025"
        location="Grouse Mountain, Vancouver"
        createdBy="Adventure Club"
      />





        </div>
      </div>
    </div>
  );
};

export default page;
