import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

type Props = {
  children: string;
  type: "primary" | "secondary";
  src?: string;
  alt: string;
};

const baseStyle = "font-inter text-md w-fit px-2 py-1.5 flex gap-2  ";

const variants = {
  primary:
    "bg-foreground  font-medium  border-foreground border-2 text-secondary  ",
  secondary: "bg-background  border-foreground border-2 text-primary",
};

const Button = ({ children, type, src, alt }: Props) => {
  return (
    <button className={cn(baseStyle, variants[type])}>
      {src && (
        <Image
          className={cn(type === "primary" ? "text-secondary" : "text-primary")}
          src={src}
          width={16}
          height={16}
          alt={alt}
        ></Image>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
