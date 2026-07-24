import { ReactNode } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  type: "primary" | "secondary";
  text?: string;
 href:string,
  className: string;
};

const baseStyle = "font-inter text-md w-fit px-2 py-1 flex gap-1 items-center max-h-fit hover:opacity-85 hover:cursor-pointer";

const variants = {
  primary: "bg-foreground dark:bg-secondary dark:border-secondary dark:text-foreground  font-medium  border-foreground border-2 text-secondary  ",
  secondary: "bg-surface dark:bg-primary dark:text-secondary dark:border-secondary  border-foreground border-2 text-primary",
};

const Button = ({ children, type,href, text, className }: Props) => {
  return (
    <Link href={href}> <button className={cn(baseStyle, variants[type], className)}>
      {children}
      <span >{text}</span>
    </button>
    </Link>
   
  );
};

export default Button;
