import React from "react";
type Props ={
  start:string,
  end: string,
  inistitue: string,
  location: string,
  certificate: string,
  description: string
}
const EducationCard = ({start,end,inistitue,location,certificate,description}:Props) => {
  return (
    <li className="border-foreground bg-surface flex gap-4 border-2 px-4 py-6">
      <div className="pr-16 font-mono text-xs">
        <p>{start}</p>
        <p className="text-gray-600 uppercase">- {end}</p>
      </div>

      <div className="border-foreground relative flex flex-col gap-3 border-l-2 px-5">
        {/* ring */}
        <div className="border-foreground bg-surface absolute top-4 -left-2 h-3.5 w-3.5 border-2"/>

        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-1 font-mono text-gray-600 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap-icon lucide-graduation-cap h-4 w-4"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
          <h2 className="font-inter text-base font-semibold">
            {certificate}
          </h2>
          <p className="text-accent text-sm font-medium uppercase">{inistitue}</p>
        </div>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </li>
  );
};

export default EducationCard;
