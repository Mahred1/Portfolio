import Image from "next/image";
import React from "react";
import ProfileStat from "./ProfileStat";
import Social from "./Social";
import Button from "../Button";

const ProfileCardVertical = () => {
  return (
    // container
    <div className="border-foreground bg-surface mx-2 mt-3 hidden max-w-74 flex-col overflow-y-auto lg:flex">
      {/* top container */}
      <div className="flex flex-col gap-3 border-2">
        {/* Image */}
        <div className="relative h-73 w-73">
          {/* Availability */}

          <div className="bg-surface border-foreground absolute top-1 left-1 z-3 flex h-fit w-fit items-center gap-2 border-2 px-2 py-0.5 font-mono text-xs font-medium">
            <div className="bg-accent h-1.5 w-1.5 rounded-full" />
            <span className="text-base">Available</span>
          </div>

          <Image src={"/pictures/profile.png"} className="z-0 object-cover grayscale-100" fill alt="Mahfuz Redwan" />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center gap-5 px-3 pt-2 pb-5 text-sm">
          {/* headelines & description */}
          <div className="flex flex-col gap-0">
            <p className="font-mono text-base tracking-tight text-gray-500">{"//Engineer .  01"}</p>
            <div className="flex flex-col gap-1">
              <h2 className="font-inter text-2xl font-semibold">Mahfuz Redwan</h2>
              <p className="text-base leading-6 text-gray-500">Full-stack developer building fast web products and automated workflows.</p>
            </div>
          </div>

          {/* location*/}
          <div className="flex items-center gap-1 font-mono text-base">
            <Image src={"/icons/map-pin.svg"} width={14} height={14} alt="location" className="w-4" />
            <span className="text-gray-500 text-sm">Adiss Ababa,ET - UTC+3</span>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <ProfileStat className="border-t-0 border-r-0" value="47" title="Projects" />
        <ProfileStat className="border-t-0 border-r-0" value="34" title="repos" />
        <ProfileStat className="border-t-0" value="20" title="Projects" />
      </div>

      {/* buttons & social links */}
      <div className="border-foreground flex w-full flex-wrap items-center justify-center gap-3 border-2 border-t-0 px-3 py-5">
        {/* buttons */}
        <div className="flex w-full flex-col items-center gap-2">
          <Button className="min-w-full justify-center py-2 text-lg" type="primary" text="Get in TOuch" href="mailto:mredwan.kemal@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon w-4 h-4 lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </Button>
          <Button className="min-w-full justify-center py-2 text-lg" type="secondary" text="CV" href="">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
          </Button>
        </div>
      </div>
      {/* social links */}
      <div className="flex w-full">
        <Social src="/icons/github.svg" alt="github" className="flex w-full justify-center border-t-0 border-r-0 py-3" href="https://github.com/Mahred1" />
        <Social src="/icons/linkedin.svg" alt="linkedin" className="flex w-full justify-center border-t-0 border-r-0 py-3" href="https://www.linkedin.com/in/m-redwan-265b3234a/" />
        <Social src="/icons/twitter.svg" alt="twitter" className="flex w-full justify-center border-t-0 py-3" href="https://github.com/Mahred1" />
      </div>
    </div>
  );
};

export default ProfileCardVertical;
