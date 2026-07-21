import ProjectFilter from "../_components/ProjectFIlter";
import ProjectCard from "../_components/projects/ProjectCard";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const currentFilter = (await searchParams).filter || "all";

  return (
    <div className="mt-6 pb-16 px-5">
      {/* Header Section */}

      <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-3">
        <p className="font-mono text-xs text-gray-600">01</p>
        <div className="flex flex-col gap-0">
          <h1 className="font-inter text-2xl font-semibold">Projects</h1>
          <span className="text-sm text-gray-600">
            6 entries · filtered by {currentFilter}
          </span>
        </div>
      </div>

      {/* Filter */}

      <ProjectFilter />


      {/* conatiner */}

      <div className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};

export default Page;
