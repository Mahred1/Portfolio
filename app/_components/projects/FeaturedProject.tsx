import Link from "next/link";
import React from "react";

const FeaturedProject = () => {
  return (
    <Link href={'/projects/id'} className=" group bg-surface pt-3 pb-2 px-4 border-2 border-foreground flex items-start justify-start gap-4 hover:bg-secondary transition-colors ease-in">
      <div className="bg-secondary w-14 h-14 border border-accent text-center">
        
      </div>
      <div className="w-full">
        {/* category */}
        <div className="flex w-full justify-between font-mono uppercase text-xs items-start">
          <span>Fullistack • 2026</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide group-hover:stroke-accent group-hover:scale-120  transition-transform ease-in lucide-arrow-up-right-icon lucide-arrow-up-right mt-1"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
        <div>
          <h1 className="font-medium text-lg">Ledger OS</h1>
          <p className="text-gray-600 text-sm">Internal accounting platform serving 12 finance teams.</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
