"use client";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const path = usePathname();
  const styles = {
    active: "text-surface bg-foreground xs:px-3 px-2 py-1.5 font-md text-sm self-center dark:bg-secondary dark:text-primary ",
    inactive: "xs:px-3 dark:text-surface dark:hover:text-foreground dark:hover:bg-gray-50 px-2 py-1.5 font-md  text-sm hover:bg-secondary",
  };
  return (
    <nav className="sticky top-4 z-10 flex justify-center sm:min-w-full md:w-md md:justify-center">
      <div className="bg-surface dark:bg-foreground border-foreground xs:gap-4 dark:border-secondary flex items-center gap-2 border-2 px-2 py-2 opacity-90 md:w-md md:justify-between">
        <div className="xs:gap-4 flex items-center gap-0 md:gap-6">
          <Link className={cn("", path == "/" ? styles.active : styles.inactive)} href={"/"}>
            Home
          </Link>
          <Link className={cn("", path.includes("/projects") ? styles.active : styles.inactive)} href={"/projects"}>
            Projects
          </Link>
          <Link className={cn("", path == "/reviews" ? styles.active : styles.inactive)} href={"/reviews"}>
            Reviews
          </Link>
        </div>
        <ThemeToggle />
        <Link className="hover:text-accent dark:text-secondary  flex items-center gap-0 text-base" href={"mailto:mredwan.kemal@gmail.com"}>
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
