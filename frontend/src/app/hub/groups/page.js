import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="font-primary mt-10 mb-20 mx-24">
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div>
            <h1 className="text-5xl">My Hub</h1>
            <p className="mt-4">
              <span>All</span> | <span className="underline">Groups</span> |{" "}
              <Link href="/hub/events">Events</Link>
            </p>

            <h1 className="text-3xl mt-14">My Groups</h1>
          </div>
          <div></div>
          <div>
            <h1 className="text-3xl">Updates</h1>
            <span className="flex items-start mt-6">
              <div className="h-32 w-px bg-black "></div>
              <div className="flex flex-col gap-6 ml-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-black">
                    Van climb added a new event
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-red-500"></span>
                  <span className="text-sm text-black">
                    One group has been deleted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-black">
                    Someone commented on Mountain Mamas!
                  </span>
                </div>
              </div>
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/momSmall.png" alt="group" width={500} height={300} />

            <div className="flex items-center justify-center gap-4 mt-2">
              <h1 className="text-lg font-semibold">Mountain Mamas</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <p className="text-sm">30 members</p>
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-black">active</span>
              </div>
            </div>
            <div className="pt-2 items-center flex">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-2  mr-4"
              >
                View Details
              </Link>
              <span className="bg-red-700 text-white p-2 ">Leave</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/flashFoxy.png" alt="group" width={500} height={500} className="shadow-lg"/>

            <div className="flex items-center justify-center gap-4 mt-2">
              <h1 className="text-lg font-semibold">Flash Foxy</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <p className="text-sm">30 members</p>
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-black">active</span>
              </div>
            </div>
            <div className="pt-2 items-center flex">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-2  mr-4"
              >
                View Details
              </Link>
              <span className="bg-red-700 text-white p-2 ">Leave</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center"></div>

          <div className="flex flex-col items-center text-center">
            <Image src="/skiing.png" alt="group" width={500} height={500} />

            <div className="flex items-center justify-center gap-4 mt-2">
              <h1 className="text-lg font-semibold">Skiing 101</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <p className="text-sm">30 members</p>
              </div>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-black">active</span>
              </div>
            </div>
            <div className="pt-2 items-center flex">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-2  mr-4"
              >
                View Details
              </Link>
              <span className="bg-red-700 text-white p-2 ">Leave</span>
            </div>
          </div>
        </div>

        <div className="flex mt-14 gap-x-6">
          <Link
            href="/explore"
            className="bg-white text-black shadow-md py-4 px-10"
          >
            Explore more groups
          </Link>
          <Link
            href="/create"
            className="bg-white text-black shadow-lg py-4 px-10"
          >
            Create a group
          </Link>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl mb-6">Suggested</h1>
        </div>
        <div className="grid grid-cols-3 space-x-4">
          <div className="flex flex-col h-full">
            <Image src="/sheJumps.png" alt="group" width={400} height={300} />

            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-semibold">SheJumps</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className="text-sm">30 members</p>
              </div>
            </div>

            <p className="text-sm">
              We serve girls ages 6 and up, women 18 & older who either have
              never participated in outdoor activities or are active members of
              the outdoor community looking to give back and share their
              passion.
            </p>
            <div className="pt-2 items-center flex text-sm">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-3 mr-4 shadow-md"
              >
                Learn More
              </Link>
              <span className="bg-navbar text-white p-3 px-6 shadow-md">Join</span>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <Image src="/frozenFootprints.png" alt="group" width={400} height={300} />

            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-semibold">Frozen Footprints</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className="text-sm">6 members</p>
              </div>
            </div>

            <p className="text-sm">
            Welcome to Frozen Footprints! A group for adventurers who love to explore the winter wilderness! We trek through snowy trails, embrace the chill, and uncover the beauty of snow-covered landscapes.
            </p>
            <div className="pt-2 items-center flex text-sm">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-3 mr-4 shadow-md"
              >
                Learn More
              </Link>
              <span className="bg-navbar text-white p-3 px-6 shadow-md">Join</span>
            </div>
          </div>
          
          <div className="flex flex-col h-full">
            <Image src="/pedalPushers.png" alt="group" width={400} height={300} />

            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-semibold">Pedal Pushers</h1>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className="text-sm">9 members</p>
              </div>
            </div>

            <p className="text-sm">
            A fun group for cycling enthusiasts of all levels. We ride, explore, and enjoy the open road together!
            </p>
            <div className="pt-10 items-center flex text-sm">
              <Link
                href="/groups/mountainmamas"
                className="bg-navbar text-white p-3 mr-4 shadow-md"
              >
                Learn More
              </Link>
              <span className="bg-navbar text-white p-3 px-6 shadow-md">Join</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default page;
