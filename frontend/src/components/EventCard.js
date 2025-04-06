// components/EventCard.js

import Image from 'next/image';

const EventCard = ({
  imageSrc = '/event3.png',
  imageAlt = 'event image',
  eventName = 'EVENT NAME',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  attendeeCount = 0,
  date = 'TBD',
  location = 'Location not set',
  createdBy = 'Unknown',
}) => {
  return (
    <div className="w-full"> {/* Ensure the parent div is full-width */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width="600"  // Set to 0 to allow responsive width
          height={0} // Set to 0 to allow responsive height
          sizes="100vw" // Ensure it takes 100% of viewport width
          className="w-full h-auto" // Image stretches across container
        />
      </div>

      <div className="flex flex-col pt-2">
        <div className="grid grid-cols-[60%_40%] items-start justify-between text-base pb-1">
          <div>
            <h3 className="text-lg font-semibold py-1">{eventName}</h3>
            <p>{description}</p>
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
              <p className="pl-2 text-sm">{attendeeCount} Attendees</p>
            </div>

            <div className="flex items-start text-sm">
              <span className="font-semibold pr-1">Date:</span>
              <span className="block sm:inline">{date}</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Location:</span>{' '}
              <span className="block sm:inline">{location}</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Created by:</span>{' '}
              <span className="block sm:inline">{createdBy}</span>
            </div>
          </div>

        </div>
        <div className="pt-4 pb-6 items-center flex text-sm">
        <div className="bg-navbar text-white p-3 mr-4 shadow-md">Learn More</div>
        <span className="bg-navbar text-white p-3 px-6 shadow-md">Register</span>
      </div>
      </div>
    </div>
  );
};

export default EventCard;
