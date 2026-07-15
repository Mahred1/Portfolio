import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import ProfileStat from "./ProfileStat";

const ProfileCard = () => {
  return (
    <div className="border-foreground  m-4">
      <div className="flex flex-2 border-2">
        <div className="relative w-30 h-35">
          <Image src={"/pictures/profile.png"} fill alt="Mahfuz Redwan" />
        </div>

        <div className="text-sm">
          <p className="font-mono">{"// Engineer .  01"}</p>
          <h2 className="font-bold text-lg font-inter">Mahfuz Redwan</h2>
          <p>
            Full-stack developer building fast web products and automated
            workflows.
          </p>
          <div>
            <Image
              src={"/icons/map-pin.svg"}
              width={16}
              height={16}
              alt="location"
            />
            <span>Adiss Ababa, ET - UTC+3</span>
          </div>
          <div>
            <Button type="primary" src="icons/mail.svg" alt="contact">
              Contact
            </Button>
            <Button type="secondary" src="icons/download.svg" alt="contact">
              CV
            </Button>

            <div>
              <Link href={"tt"}>
                {" "}
                <Image
                  src={"/icons/mail.svg"}
                  width={16}
                  height={16}
                  alt="location"
                />
              </Link>
              <Link href={"tt"}>
                {" "}
                <Image
                  src={"/icons/mail.svg"}
                  width={16}
                  height={16}
                  alt="location"
                />
              </Link>
              <Link href={"tt"}>
                {" "}
                <Image
                  src={"/icons/mail.svg"}
                  width={16}
                  height={16}
                  alt="location"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between ">
        <ProfileStat className="border-t-0 border-r-0" value="47" title="Projects" /> 
        <ProfileStat className="border-t-0 border-r-0" value="34" title="repos" /> 
        <ProfileStat className="border-t-0" value="20" title="Projects" /> 
      </div>
    </div>
  );
};

export default ProfileCard;
