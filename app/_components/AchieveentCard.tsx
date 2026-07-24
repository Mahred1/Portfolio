import React from "react";
import { cn } from "../lib/utils";

const AchieveentCard = ({className}:{className:string}) => {
  return (
    <div className={cn("border-foreground bg-surface transition-colors ease-in dark:hover:bg-gray-700 dark:bg-primary dark:border-secondary hover:bg-secondary flex px-4 py-4 gap-12 border-2",className)}>
      <div className="font-mono text-base flex-none dark:text-neutral-500 text-gray-600">01</div>
      <div className="flex items-center flex-1 justify-between">
        <div className="">
          <h2 className="text-sm font-semibold dark:text-secondary">GitHub Stars Program</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">Inducted 2025. Maintaining Kettle UI (4.2k★).</p>
        </div>
        <span className="font-mono text-xs dark:text-neutral-500 text-gray-600">2025</span>
      </div>
    </div>
  );
};

export default AchieveentCard;