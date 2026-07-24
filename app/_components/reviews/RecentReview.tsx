import React from "react";


type Props={
  name:string,
  description:string,
  position:string,
  company:string,
  
}

const RecentReview = ({name,description,position,company}:Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon fill-accent lucide-star stroke-accent h-4 w-4">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    );
  });
  return (
    <div className="bg-surface border-foreground hover:bg-secondary gap-4 border-2 pl-5 pr-4 flex flex-col py-5 transition-colors ease-in">
      <div className="flex gap-1">{stars}</div>
      <p className="text-sm font-medium">{`"${description}"`}</p>
      <div className="border border-foreground"></div>
      <div className="flex flex-col gap-0">
        <h2 className="text-sm font-medium ">{name}</h2>
        <p className="text-gray-600 text-xs">{position.toUpperCase()}, {company}</p>
      </div>
    </div>
  );
};
 
export default RecentReview;
