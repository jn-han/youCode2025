import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-24 mt-20 grid grid-cols-[65%_35%]">

        <div>
          <div className="w-[95%]">
            <Image
              src="/momhiking.png"
              alt="momshiking"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-3xl font-bold pt-12 pb-8">
            About the Mountain Mamas
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h1 className="text-3xl font-bold pt-12 pb-8">Join us if...</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h1 className="text-4xl pt-16 pb-8">Discussion</h1>
          <div className="w-[60%]">
          <Image
              src="/discussion.png"
              alt="momshiking"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>


        <div className="ml-24">
          <h1 className="text-5xl font-semibold mb-1">Mountain </h1>
          <h1 className="text-5xl font-semibold mb-6">Mamas</h1>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pl-2 text-lg">Created by [name]</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p className="pl-2 text-lg">Located in Vancouver, BC</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            <p className="pl-2 text-lg">30 members</p>
          </div>
          <button className="w-full bg-navbar text-white py-3 mt-12">
            Join
          </button>
          <div className="flex items-center justify-center w-full">
            <hr className="my-20 w-[45%] self-center" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Events in this group</h2>
          <div className="pb-10">
            <div className="w-full">
              <Image
                src="/event1.png"
                alt="momshiking"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col pt-2">
              <div>
                <div className="grid grid-cols-[60%_40%] items-start justify-between text-base pb-1">
                  <div>
                    <h3 className="text-lg font-semibold py-1">EVENT NAME</h3>
                    <p className="">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>

                  <div >
                    <div className="flex items-center pb-2">
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
                      <p className="pl-2 text-sm">14 Attendees</p>
                    </div>

                    <div className="flex items-start text-sm">
                      <span className="font-semibold pr-1">Date:</span>
                      <span className="block sm:inline">4/30/2025</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Location:</span>{" "}
                      <span className="block sm:inline">
                        Grouse Mountain, Vancouver
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Created by:</span>{" "}
                      <span className="block sm:inline">GROUP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-10">
            <div className="w-full">
              <Image
                src="/event2.png"
                alt="momshiking"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col pt-2">
              <div>
                <div className="grid grid-cols-[60%_40%] items-start justify-between text-base pb-1">
                  <div>
                    <h3 className="text-lg font-semibold py-1">EVENT NAME</h3>
                    <p className="">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>

                  <div >
                    <div className="flex items-center pb-2">
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
                      <p className="pl-2 text-sm">14 Attendees</p>
                    </div>

                    <div className="flex items-start text-sm">
                      <span className="font-semibold pr-1">Date:</span>
                      <span className="block sm:inline">4/30/2025</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Location:</span>{" "}
                      <span className="block sm:inline">
                        Grouse Mountain, Vancouver
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Created by:</span>{" "}
                      <span className="block sm:inline">GROUP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div>
            <div className="w-full">
              <Image
                src="/event3.png"
                alt="momshiking"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col pt-2">
              <div>
                <div className="grid grid-cols-[60%_40%] items-start justify-between text-base pb-1">
                  <div>
                    <h3 className="text-lg font-semibold py-1">EVENT NAME</h3>
                    <p className="">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center pb-2">
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
                      <p className="pl-2 text-sm">14 Attendees</p>
                    </div>

                    <div className="flex items-start text-sm">
                      <span className="font-semibold pr-1">Date:</span>
                      <span className="block sm:inline">4/30/2025</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Location:</span>{" "}
                      <span className="block sm:inline">
                        Grouse Mountain, Vancouver
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Created by:</span>{" "}
                      <span className="block sm:inline">GROUP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
