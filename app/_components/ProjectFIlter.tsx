"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "../lib/utils";

type FilterOption = "all" | "frontend" | "backend" | "workflows" | "full-Stack";

const ProjectFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const rawFilter = searchParams.get("filter");

  const isFilter = (val: string | null): val is FilterOption => {
    return ["all", "frontend", "backend", "full-stack", "workflows"].includes(val as string);
  };

  const currentFilter: FilterOption = isFilter(rawFilter) ? rawFilter : "all";

  const handleChange = (newFilter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newFilter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", newFilter);
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  const styles = {
    active: "text-surface bg-foreground sm:px-3 px-2 py-1.5 font-md text-sm self-center",
    inactive: "sm:px-3 px-2 py-1.5 font-md  text-sm  hover:bg-secondary text-gray-600",
  };
  return (
    <div className="bg-surface mt-6 border-2 p-2 flex flex-wrap gap-2 items-center justify-center sm:justify-start w-full">
      {["all", "frontend", "backend", "full-stack", "workflows"].map((option) => {
        return (
          <button onClick={() => handleChange(option)} className={cn("", currentFilter == option ? styles.active : styles.inactive)} key={option}>
            <span className="flex gap-1 font-medium ">
              <span>{`${option.split("")[0]?.toUpperCase()}${option.split("").splice(1).join("").toLowerCase()}`}</span>
              <span className={cn("font-mono text-xs", currentFilter == option ? "text-surface" : "text-gray-600")}>04</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;
