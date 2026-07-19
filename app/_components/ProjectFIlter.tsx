"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "../lib/utils";
import { userInfo } from "os";

type FilterOption = "all" | "frontend" | "backend" | "workflows" | "full-Stack";

const ProjectFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const rawFilter = searchParams.get("filter");

  const isFilter = (val: string | null):val is FilterOption => {
    return (
      ["all", "frontend", "backend", "full-stack", "workflows"].includes(
        val as string,
      )
    );
  };

  const currentFilter:FilterOption= isFilter(rawFilter) ? rawFilter :"all"
    

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
    active:
      "text-surface bg-foreground sm:px-3 px-2 py-1.5 font-md text-sm self-center",
    inactive: "sm:px-3 px-2 py-1.5 font-md  text-sm hover:bg-secondary",
  };
  return (
    <div className="bg-surface border-2 mt-6 p-3 ">
      {["all", "frontend", "backend", "full-stack", "workflows"].map(
        (option) => {
          return (
            <button onClick={()=>handleChange(option)} className={cn("",currentFilter == option ?styles.active:styles.inactive)} key={option}>
              <span>{option}</span>
              <span>04 </span>
            </button>
          );
        },
      )}
    </div>
  );
};

export default ProjectFilter;
