import React from "react";
import Button from "../Button";
import Image from "next/image";
import ProfileStat from "./ProfileStat";
import Social from "./Social";

const ProfileCard = () => {
  return (
    // container
    <div className="border-foreground bg-surface mx-3 mt-3 min-w-[95%] sm:mx-auto lg:hidden">
      {/* top container */}
      <div className="flex gap-3 border-2">
        {/* Image */}
        <div className="relative w-35 sm:w-35">
          {/* Availability */}

          <div className="bg-surface border-foreground absolute top-1 left-1 z-3 flex h-fit w-fit items-center gap-2 border-2 px-2 py-0.5 font-mono text-xs font-medium sm:left-1.5">
            <div className="bg-accent h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 md:h-2.5 md:w-2.5" />
            <span className="sm:text-sm md:text-base">open</span>
          </div>

          <Image src={"/pictures/profile.png"} className="object-cover grayscale-100" fill alt="Mahfuz Redwan" />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center gap-4 pt-2 pb-3 text-sm md:pr-2">
          {/* headelines & description */}
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm tracking-tight">{"//Engineer .  01"}</p>
            <h2 className="font-inter text-xl font-semibold sm:text-2xl md:text-2xl">Mahfuz Redwan</h2>
            <p className="text-base sm:max-w-[350] sm:text-base sm:leading-5 md:max-w-full  text-gray-500">Full-stack developer building fast web products and automated workflows.</p>
          </div>

          {/* location*/}
          <div className="flex items-center gap-1 font-mono text-sm sm:text-[14px]  text-gray-500">
            <Image src={"/icons/map-pin.svg"} width={14} height={14} alt="location" className="sm:w-3.5 md:w-4" />
            <span>Adiss Ababa,ET - UTC+3</span>
          </div>

          {/* buttons & social links */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* buttons */}
            <div className="flex gap-2">
              <Button className="text-xs md:text-sm" type="primary" src="icons/mail.svg" alt="contact">
                Contact
              </Button>
              <Button className="text-xs md:text-sm" type="secondary" src="icons/download.svg" alt="contact">
                CV
              </Button>
            </div>

            {/* social links */}
            <div className="flex">
              <Social src="/icons/github.svg" alt="github" className="border-r-0" href="https://github.com/Mahred1" />
              <Social src="/icons/linkedin.svg" alt="linkedin" className="border-r-0" href="https://www.linkedin.com/in/m-redwan-265b3234a/" />
              <Social src="/icons/twitter.svg" alt="twitter" className="" href="https://github.com/Mahred1" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <ProfileStat className="border-t-0 border-r-0" value="47" title="Projects" />
        <ProfileStat className="border-t-0 border-r-0" value="34" title="repos" />
        <ProfileStat className="border-t-0" value="20" title="Projects" />
      </div>
    </div>
  );
};

export default ProfileCard;
