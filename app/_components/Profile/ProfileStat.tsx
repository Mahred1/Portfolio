import { cn } from "@/app/lib/utils";
import React from "react";

const ProfileStat = ({ value, title, className }: { value: string; title: string; className: string }) => {
  return (
    <div className={cn("border-foreground dark:border-secondary flex w-full flex-col items-center gap-0 border-2 py-1", className)}>
      <h2 className="text-xl font-mono dark:text-gray-200 font-bold">{value}</h2>
      <span className="font-mono text-gray-500 dark:text-neutral-500 text-sm ">{title}</span>
    </div>
  );
};

export default ProfileStat;
