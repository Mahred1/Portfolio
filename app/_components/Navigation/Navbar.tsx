"use client";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  const styles = {
    active: "text-surface bg-foreground xs:px-3 px-2 py-1.5 font-md text-sm self-center",
    inactive: "xs:px-3 px-2 py-1.5 font-md  text-sm hover:bg-secondary",
  };
  return (
    <nav className="flex justify-center  sm:min-w-full sticky top-4 z-10 md:w-md md:justify-center ">
      <div className="bg-surface opacity-90   border-foreground flex items-center xs:gap-4 gap-2 border-2 px-2 py-2 md:w-md md:justify-between">
      <div className="flex items-center gap-0 xs:gap-4 md:gap-6 ">
        <Link className={cn("", path == "/" ? styles.active : styles.inactive)} href={"/"}>
          Home
        </Link>
        <Link className={cn("", path == "/projects" ? styles.active : styles.inactive)} href={"/projects"}>
          Projects
        </Link>
        <Link className={cn("", path == "/reviews" ? styles.active : styles.inactive)} href={"/reviews"}>
          Reviews
        </Link>
      </div>
      <div className="border-[1.5px] border-t-0 border-b-0 px-3.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      </div>
      <Link className="flex items-center gap-0 text-base hover:opacity-70" href={"mailto:mredwan.kemal@gmail.com"}>
        <span>Hire</span>{" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right mt-1">
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </Link>
    </div>
    </nav>
    
  );
};

export default Navbar;
