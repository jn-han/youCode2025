import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar/>
    <div className="font-primary mt-10 mx-24">
        <h1 className="text-3xl">My Hub</h1>
        <p>
  <span>All</span> | <span className="underline">Groups</span> | <span>Events</span>
</p>

        <div className="grid grid-cols-3 gap-10 mt-10">
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
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 ... your path here"
        />
      </svg>
      <p className="text-sm">30 members</p>
    </div>

    <div className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span className="text-sm text-black">active</span>
    </div>
  </div>
</div>



<div className="flex flex-col items-center text-center">
  <Image src="/flashFoxy.png" alt="group" width={500} height={500} />

  <div className="flex items-center justify-center gap-4 mt-2">
    <h1 className="text-lg font-semibold">Mountain Mamas</h1>

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
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 ... your path here"
        />
      </svg>
      <p className="text-sm">30 members</p>
    </div>

    <div className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span className="text-sm text-black">active</span>
    </div>
  </div>
</div>
        </div>

    </div>
    </div>
  )
}

export default page