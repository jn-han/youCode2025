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
          <div className="w-full max-w-md border flex">
            <div className="relative group">
              <button className="bg-black text-white px-4 py-2 flex items-center text-center gap-1">
                All
                <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
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
        groupName="Pedal Pushers"
        imageSrc="/pedalPushers.png"
        description="A fun group for cycling enthusiasts of all levels. We ride, explore, and enjoy the open road together!"
        membersCount={9}
      />
            <GroupCard
        groupName="Pedal Pushers"
        imageSrc="/pedalPushers.png"
        description="A fun group for cycling enthusiasts of all levels. We ride, explore, and enjoy the open road together!"
        membersCount={9}
      />
            <GroupCard
        groupName="Pedal Pushers"
        imageSrc="/pedalPushers.png"
        description="A fun group for cycling enthusiasts of all levels. We ride, explore, and enjoy the open road together!"
        membersCount={9}
      />
            <GroupCard
        groupName="Pedal Pushers"
        imageSrc="/pedalPushers.png"
        description="A fun group for cycling enthusiasts of all levels. We ride, explore, and enjoy the open road together!"
        membersCount={9}
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
