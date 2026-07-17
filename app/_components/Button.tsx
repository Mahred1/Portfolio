import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

type Props = {
  children: string;
  type: "primary" | "secondary";
  src?: string;
  alt: string;
  className: string;
};

const baseStyle = "font-inter text-md w-fit px-2 py-1 flex gap-2 items-center max-h-fit hover:opacity-85 hover:cursor-pointer";

const variants = {
  primary: "bg-foreground  font-medium  border-foreground border-2 text-secondary  ",
  secondary: "bg-surface  border-foreground border-2 text-primary",
};

const Button = ({ children, type, src, alt, className }: Props) => {
  return (
    <button className={cn(baseStyle, variants[type], className)}>
      {src && <Image className={cn(type === "primary" ? "text-secondary" : "text-primary")} src={src} width={16} height={16} alt={alt}></Image>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
