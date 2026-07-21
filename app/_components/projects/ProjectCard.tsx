import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="border-2 border-foreground hover:border-accent">
      <div className="w-full h-65  relative bg-linear-0 ">
        <Image src={"/pictures/project.png" } className="object-fit" alt="Project" fill/>
      </div>
      <div className="px-3 py-2 mt-3">
        <div className="flex justify-between items-center ">
          <span className="font-semibold text-2xl">Ledgeros</span>
          <span className="font-mono text-xs opacity-80 border px-1 py-0.5 ">Full-stack</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">
          Double-entry bookkeeping platform with audit log, multi-currency and a
          typed API layer.
        </p>
        <div className="flex w-full gap-2  border-t-2 justify-between mt-8 pt-4">
          <Link className="flex gap-1 w-full transition-colors ease-in items-center justify-center bg-surface text-foreground border-foreground border-2 hover:text-surface hover:bg-foreground text-sm font-medium py-2" href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" w-5 h-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>Code</span>
          </Link>
          <Link className="flex gap-1 transition-colors ease-in items-center border-2 border-foreground hover:border-accent hover:text-foreground  hover:bg-accent w-full justify-center bg-foreground text-surface text-sm font-medium py-2" href={""}>
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
              className="lucide w-4 h-4  lucide-external-link-icon lucide-external-link"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            <span>Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
