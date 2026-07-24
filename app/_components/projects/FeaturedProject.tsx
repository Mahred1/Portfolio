import Link from "next/link";
import React from "react";

type Props = {
  slug: string;
  description: string;
  title: string;
  category: string;
};

const FeaturedProject = ({ slug, description, title, category }: Props) => {
  return (
    <Link href={`projects/${slug}`} className="group bg-surface dark:border-secondary dark:bg-primary border-foreground hover:bg-secondary flex items-start justify-start gap-6 border-2 px-4 pt-3 pb-2 transition-colors ease-in dark:hover:bg-gray-800">
      <div className="bg-secondary dark:bg-foreground border-accent h-14 w-14 border text-center"></div>
      <div className="w-full">
        {/* category */}
        <div className="flex w-full items-start justify-between font-mono text-xs uppercase">
          <span className="text-gray-600 dark:text-gray-400">{category} • 2026</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide group-hover:stroke-accent lucide-arrow-up-right-icon lucide-arrow-up-right mt-1 transition-transform ease-in group-hover:scale-120">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="dark:text-secondary text-xl font-semibold tracking-wide">{title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
