import React from "react";

const ExperienceCard = () => {
  return (
    <li className="border-foreground flex border-2 px-4 py-6 gap-4">
      <div className="font-mono text-xs pr-16 ">
        <p>2024</p>
        <p className="text-gray-600 uppercase">- Present</p>
      </div>

      <div className="border-foreground relative flex flex-col gap-3 border-l-2 px-5">
        {/* ring */}
        <div className="border-foreground bg-surface w-3.5 h-3.5 absolute border-2 top-4 -left-2"></div>

        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-1 font-mono text-gray-600 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide w-4 h-4 lucide-briefcase-icon lucide-briefcase"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <span className="text-sm">Remote</span>
          </div>
          <h2 className="font-inter text-lg font-bold">Principal Engineer</h2>
          <p className="text-accent text-sm font-medium">Northwind Labs</p>
        </div>
        <p className="text-gray-600 text-sm">
          Leading platform rebuild and a team of four engineers shipping fintech
          tooling.
        </p>
      </div>
    </li>
  );
};

export default ExperienceCard;
