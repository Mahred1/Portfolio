import { cn } from "@/app/lib/utils";
import React from "react";

const ProfileStat = ({ value, title, className }: { value: string; title: string; className: string }) => {
  return (
    <div className={cn("border-foreground flex w-full flex-col items-center gap-0 border-2 py-1", className)}>
      <h2 className="text-lg font-mono font-bold">{value}</h2>
      <span className="font-mono text-gray-500 text-base ">{title}</span>
    </div>
  );
};

export default ProfileStat;
