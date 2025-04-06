// // components/EventCard.js

// import Image from 'next/image';

// const GroupCard = ({
//   imageSrc = '/event3.png',
//   imageAlt = 'event image',
//   eventName = 'EVENT NAME',
//   description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//   attendeeCount = 0,

// }) => {
//   return (
//     <div className="w-full"> {/* Ensure the parent div is full-width */}
//       <div className="w-full">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           width="600"  // Set to 0 to allow responsive width
//           height={0} // Set to 0 to allow responsive height
//           sizes="100vw" // Ensure it takes 100% of viewport width
//           className="w-full h-auto" // Image stretches across container
//         />
//       </div>

//       <div className="flex flex-col pt-2">
        
//           <div>
//           <div className="flex items-center pb-2">
//             <h3 className="text-lg font-semibold py-1">{eventName}</h3>
//             <div className="flex items-center pb-2 pl-10">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="size-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
//                 />
//               </svg>
//               <p className="pl-2 text-sm">{attendeeCount} Attendees</p>
//             </div>
//             </div>
//             <p>{description}</p>
//           </div>
//           <div>
            

//           </div>
//       </div>
//     </div>
//   );
// };

// export default GroupCard;


// components/GroupCard.js
import Image from 'next/image';

export default function GroupCard({ 
  title, 
  imageSrc, 
  memberCount, 
  status, 
  text
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={imageSrc} alt={title} width={500} height={500} />

      <div className="flex items-center justify-center gap-4 mt-2">
        <h1 className="text-lg font-semibold">{title}</h1>

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
          <p className="text-sm">{memberCount} members</p>
        </div>

        <div className="flex gap-1">
          <span
            className={`w-2 h-2 rounded-full ${
              status === 'active' ? 'bg-green-500' : 'bg-gray-400'
            }`}
          ></span>
          <span className="text-sm text-black">{status}</span>
        </div>
      </div>


      <p className="text-sm">
{text}            </p>
      <div className="pt-10 items-center flex text-sm">
              <div
                className="bg-navbar text-white p-3 mr-4 shadow-md"
              >
                Learn More
              </div>
              <span className="bg-navbar text-white p-3 px-6 shadow-md">Join</span>
            </div>
    </div>
  );
}
