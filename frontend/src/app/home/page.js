import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Navbar from '@/components/Navbar';
import EventCard from '@/components/EventCard';
import GroupCard from '@/components/GroupCard';

const page = () => {
  return (
    <div>
      <Navbar/>
      <div
      className="h-180 items-center flex"
      style={{ backgroundImage: "url('/home.png')" }}
      >
        <div className="font-marcellus-sc text-white w-[55%] ml-24 ">
          <h1 className="font-bold text-6xl pb-12"> Welcome</h1>
          <h1 className="font-bold text-6xl pb-12"> Lena!</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mx-24 my-12">
      <div
  className="flex items-center justify-center h-120 bg-cover bg-center"
  style={{ backgroundImage: "url('/myEvents.png')" }}
>
  <div className="font-primary text-black text-center flex flex-col items-center">
    <h1 className="font-bold text-2xl pb-12">My events</h1>
    <div className="flex flex-col gap-4">
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
        event
      </Link>
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
      event
      </Link>
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
      event
      </Link>
    </div>
  </div>
</div>

<div
  className="flex items-center justify-center h-120 bg-cover bg-center"
  style={{ backgroundImage: "url('/myGroups.png')" }}
>
      <div className="font-primary text-black text-center flex flex-col items-center">
    <h1 className="font-bold text-2xl pb-12">My groups</h1>
    <div className="flex flex-col gap-4">
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
        group
      </Link>
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
      group
      </Link>
      <Link href="/signUp" className="font-bold text-xl font-primary p-2 px-10">
      group
      </Link>
    </div>
  </div>
  </div>
</div>

        

        <div className="mx-24 pb-14">
        {/* <input
            className="border mt-12 py-2 text-lg w-full border-black pl-8"
            placeholder="Search Groups/Events"
            
          /> */}
          <div className="relative w-full  mx-auto mt-4">


  <input
    type="text"
    placeholder="Search Groups/Events"
    className="w-full border border-black rounded-none pl-12 pr-12 py-2 text-lg placeholder-gray-500"
  />
  <div className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
  </div>
  {/* Search icon (right) */}
  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
  </div>

<h1 className="text-4xl my-14 font-primary">Newly Posted Events</h1>
<div className="overflow-x-auto w-full">
<div className="flex flex-row space-x-4">
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



  </div>
</div>


<h1 className="text-4xl my-14 font-primary">Newly Posted Groups</h1>
<div className="overflow-x-auto w-full">
<div className="flex flex-row space-x-4">
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



  </div>
</div>



</div>

        </div>




    </div>
  )
}

export default page