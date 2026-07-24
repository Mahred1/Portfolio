import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Social = ({  href, className,children }: {  href: string; className: string,children:ReactNode }) => {
  return (
    <Link className={cn("border-2 p-1 hover:opacity-95 dark:border-secondary dark:text-secondary", className)} target="_blank" href={href}>
      {" "}
      {children}
    </Link>
  );
};

export default Social;
