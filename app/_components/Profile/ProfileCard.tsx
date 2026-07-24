import React from "react";
import Button from "../Button";
import Image from "next/image";
import ProfileStat from "./ProfileStat";
import Social from "./Social";

const ProfileCard = () => {
  return (
    // container
    <div className="border-foreground transition-colors ease-in dark:bg-primary bg-surface mx-3 mt-3 min-w-[95%]  sm:mx-auto lg:hidden">
      {/* top container */}
      <div className="flex gap-3 dark:border-secondary border-2">
        {/* Image */}
        <div className="relative w-35 sm:w-35">
          {/* Availability */}

          <div className="bg-surface dark:bg-foreground dark:text-secondary border-foreground absolute top-1 left-1 z-3 flex h-fit w-fit items-center gap-2 border-2 px-2 py-0.5 font-mono text-xs font-medium sm:left-1.5">
            <div className="bg-accent h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 md:h-2.5 md:w-2.5" />
            <span className="sm:text-sm md:text-base">open</span>
          </div>

          <Image
            src={"/pictures/profile.png"}
            className="object-cover grayscale-100"
            fill
            alt="Mahfuz Redwan"
          />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center gap-4 pt-2 pb-3 text-sm md:pr-2">
          {/* headelines & description */}
          <div className="flex flex-col gap-1">
            <p className="font-mono dark:text-neutral-500 text-sm tracking-tight">
              {"//Engineer .  01"}
            </p>
            <h2 className="font-inter dark:text-secondary text-xl font-semibold sm:text-2xl md:text-2xl">
              Mahfuz Redwan
            </h2>
            <p className="text-base sm:max-w-[350] dark:text-gray- sm:text-base sm:leading-5 md:max-w-full  text-neutral-500">
              Full-stack developer building fast web products and automated
              workflows.
            </p>
          </div>

          {/* location*/}
          <div className="flex items-center gap-1 font-mono text-sm sm:text-[14px] dark:text-neutral-500   text-gray-500">
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
              className="lucide w-3.5 h-3.5 lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Adiss Ababa,ET - UTC+3</span>
          </div>

          {/* buttons & social links */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* buttons */}
            <div className="flex gap-2">
              <Button
                href="mailto:mredwan.kemal@gmail.com"
                className="text-xs md:text-sm"
                type="primary"
                text="Contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-icon w-4 h-4 lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </Button>
              <Button
                href=""
                className="text-xs md:text-sm"
                type="secondary"
                text="CV"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download-icon lucide-download"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </Button>
            </div>

            {/* social links */}
            <div className="flex">
              <Social className="border-r-0" href="https://github.com/Mahred1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Social>
              <Social
                className="border-r-0"
                href="https://www.linkedin.com/in/m-redwan-265b3234a/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Social>
              <Social className="" href="https://github.com/Mahred1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  
                >
                  <path
                    fill="none"
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                  />
                </svg>
              </Social>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <ProfileStat
          className="border-t-0 border-r-0"
          value="47"
          title="Projects"
        />
        <ProfileStat
          className="border-t-0 border-r-0"
          value="34"
          title="repos"
        />
        <ProfileStat className="border-t-0" value="20" title="Projects" />
      </div>
    </div>
  );
};

export default ProfileCard;
