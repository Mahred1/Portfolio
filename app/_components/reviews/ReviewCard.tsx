import React from "react";

type Props={
  name:string,
  description:string,
  position:string,
  company:string,
  source:string
}

const ReviewCard = ({name,description,position,company,source}:Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-star-icon fill-accent lucide-star stroke-accent h-4 w-4"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    );
  });
  return (
    <div className="border-foreground bg-surface border-2 p-4">
      <div className="items flex items-baseline justify-between border-b-2 border-foreground pb-3">
        <h1 className="text-base font-bold">{company.split(" ").at(0)}</h1>
        <p className="font-mono text-xs text-gray-600 uppercase">
          Via {source}
        </p>
      </div>

      <div className="mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-quote-icon stroke-accent mb-2 lucide-quote"
        >
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        </svg>
        <span className="font-medium text-sm">
         {description}
        </span>
      </div>

      <div className="mt-6 border-t-2 border-foreground pt-3 flex justify-between">
        <div >
          <h2 className="font-medium text-sm">{name}</h2>
          <p className="text-xs text-gray-600 ">{position.toUpperCase()}, {company}</p>
        </div>
        <div className="flex gap-0">

        {stars}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
