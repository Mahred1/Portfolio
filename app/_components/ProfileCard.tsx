import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="border-foreground border-2 m-4">

    <div className="relative">
      <Image src={""} fill alt="Mahfuz Redwan"/>

    </div>

      <div>hfuz M
        <p>{"// Engineer .  01"}</p>
        <h2>Mahfuz Redwan</h2>
        <p>
          Full-stack developer building fast web products and automated
          workflows.
        </p>
        <div>
          <Image
            src={"/icons/mail.svg"}
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

      <div>
        <div><h2>47</h2><span>Projects</span></div>
        <div><h2>47</h2><span>Projects</span></div>
        <div><h2>47</h2><span>Projects</span></div>
      </div>
    </div>
  );
};

export default ProfileCard;
