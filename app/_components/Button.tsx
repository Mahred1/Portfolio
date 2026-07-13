import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

type Props = {
  children: string;
  type: "primary" | "secondary";
  icon: boolean;
  alt: string;
};

const primary =
  "bg-foreground font-inter font-medium text-md w-fit px-4 py-2 border-foreground border-3 text-secondary flex gap-2";
const secondary =
  "bg-background font-inter text-lg w-fit px-4 py-2.5 border-foreground border-3 text-primary flex gap-2";

const Button = ({ children, type, icon, alt }: Props) => {
  return (
    <button className={cn(type === "primary" ? primary : secondary)}>
      {icon && <Image src="/file.svg" width={16} height={16} alt={alt}></Image>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
