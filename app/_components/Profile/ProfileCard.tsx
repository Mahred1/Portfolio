import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import ProfileStat from "./ProfileStat";
import Social from "./Social";

const ProfileCard = () => {
  return (
    // container
    <div className="border-foreground bg-surface  mx-auto mt-4 max-w-[95%]">
      {/* top container */}
      <div className="flex gap-3 border-2">
        {/* Image */}
        <div className="relative  w-70 min-h-fit">
          {/* Availability */}

          <div className="w-fit h-fit px-2 py-0.5 font-medium text-xs bg-surface absolute top-1 left-1.5 z-3 border-2 border-foreground flex gap-1 items-center font-mono ">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"/><span>open</span>
          </div>

          <Image
            src={"/pictures/profile.png"}
            className="object-cover grayscale-50"
            fill
            alt="Mahfuz Redwan"
          />
        </div>
        {/* content */}
        <div className="text-sm flex flex-col gap-3 pt-2 pb-3">
          {/* headelines & description */}
          <div className="flex flex-col gap-0">
            <p className="font-mono text-sm">{"//Engineer .  01"}</p>
            <h2 className="font-bold text-lg font-inter">Mahfuz Redwan</h2>
            <p>
              Full-stack developer building fast web products and automated
              workflows.
            </p>
          </div>

          {/* location*/}
          <div className="font-mono text-[11px] flex gap-1 items-center">
            <Image
              src={"/icons/map-pin.svg"}
              width={12}
              height={12}
              alt="location"
            />
            <span>Adiss Ababa,ET - UTC+3</span>
          </div>

          {/* buttons & social links */}
          <div className=" flex flex-wrap gap-2 items-center">
            {/* buttons */}
            <div className="flex gap-2">
              <Button
                className="text-xs"
                type="primary"
                src="icons/mail.svg"
                alt="contact"
              >
                Contact
              </Button>
              <Button
                className="text-xs"
                type="secondary"
                src="icons/download.svg"
                alt="contact"
              >
                CV
              </Button>
            </div>

            {/* social links */}
            <div className="flex">
              <Social
                src="/icons/github.svg"
                alt="github"
                className="border-r-0"
                href="https://github.com/Mahred1"
              />
              <Social
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="border-r-0"
                href="https://www.linkedin.com/in/m-redwan-265b3234a/"
              />
              <Social
                src="/icons/twitter.svg"
                alt="twitter"
                className=""
                href="https://github.com/Mahred1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between ">
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
