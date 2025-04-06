'use client';
import React from 'react'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const linkStyle = (path) =>
      pathname === path ? 'underline' : '';
  
    return (
      <div className="grid grid-cols-[60%_30%_10%] bg-navbar text-white h-20 items-end pb-2 text-xl font-primary">
        <div className="ml-15">
          <p>Name</p>
        </div>
  
        <div className="flex space-x-12">
          <Link href="/explore/all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></Link>



          <Link href="/home" className={linkStyle('/home')}>HOME</Link>
          <Link href="/hub/groups" className={linkStyle('/hub/groups')}>MY HUB</Link>
          <Link href="/createEvent" className={linkStyle('/createEvent')}>CREATE</Link>
        </div>
  
        <div>
          <Link href="/signUp">Sign Up</Link>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg> */}
        </div>
      </div>
    );
}

export default Navbar