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
              <span>All</span> | <Link href="/hub/groups">Groups</Link> |{" "}
              <span className="underline">Events</span>
            </p>

            <h1 className="text-3xl mt-14">My Events</h1>
          </div>

          <div
            style={{ position: "relative", width: "245px", height: "190px" }}
          >
            <Image
              src="/calendar.png"
              alt="group"
              fill
              style={{ objectFit: "fill" }} // or 'contain' depending on your needs
            />
          </div>

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
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Upcoming Events</h2>
          <div className="mb-2">
            <p>Sunday April 13, 2025</p>
            <hr className="mt-2 w-full" />
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <Image src="/skiJump.png" alt="group" width={500} height={500} />
            <div className="ml-4">
              <p className=" text-xl mb-6">9:00 AM - 5:00 PM PDT</p>
              <h2 className="font-semibold text-3xl mb-4">Glide Summit</h2>
              <h3 className=" text-xl text-gray-500">
                Summit Collective - Vancouver BC
              </h3>
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

                <p className="text-xs">12 attendees</p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <p>Saturday, May 9, 2025</p>
            <hr className="mt-2 w-full" />
          </div>
          <div className="grid grid-cols-[30%_70%] mb-10">
            <Image src="/trailblazers.png" alt="group" width={500} height={500} />
            <div className="ml-4">
              <p className=" text-xl mb-6">9:00 AM - 11:00 AM PDT</p>
              <h2 className="font-semibold text-3xl mb-4">Trailblazers Hike</h2>
              <h3 className=" text-xl text-gray-500">
                Mountain Mamas - North Vancouver BC
              </h3>
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

                <p className="text-xs">14 attendees</p>
              </div>
            </div>
          </div>

          <Link href="/createEvent" className="shadow-lg p-3 px-10 mt-14">
            Create Event
          </Link>
        </div>
        <div>
        <div className="mb-14">
          <h2 className="mb-4 text-xl font-semibold">Past Events</h2>
          <div className="mb-2">
            <p>Sunday April 13, 2025</p>
            <hr className="mt-2 w-full" />
          </div>
          <div className="grid grid-cols-[30%_70%]">
            <Image src="/ascendTogether.png" alt="group" width={500} height={500} />
            <div className="ml-4">
              <p className=" text-xl mb-6">3:00 PM - 9:00 PM PDT</p>
              <h2 className="font-semibold text-3xl mb-4">Ascend Together</h2>
              <h3 className=" text-xl text-gray-500">
                Mountain Mavericks - Vancouver BC
              </h3>
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

                <p className="text-xs">11 attendees</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
