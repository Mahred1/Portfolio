import { cn } from "@/app/lib/utils";
import React from "react";

const ProfileStat = (
    {value,title,className}:{value:string,title:string,className:string}
) => {
  return (
    <div className={cn("border-foreground border-2  w-full flex flex-col items-center gap-0 py-1 ",className)}>
      <h2 className="font-bold text-base">{value}</h2>
      <span className="font-mono text-sm">{title}</span>
    </div>
  );
};

export default ProfileStat;
