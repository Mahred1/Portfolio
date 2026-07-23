import { SanityDocument } from "next-sanity";
import ProjectFilter from "../_components/ProjectFIlter";
import ProjectCard from "../_components/projects/ProjectCard";
import { client } from "../sanity/client";

const POST_QUERY = `*[_type == "project" && defined(slug.current)]
  { _id, title,slug,image,description,stack,category,stack,liveLink,repoLink }`;
const options = { next: { revalidate: 30 } };

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const currentFilter = (await searchParams).filter || "all";

  const projects = await client.fetch<SanityDocument[]>(POST_QUERY, {}, options);
console.log(projects)
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

      <ul className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
        {projects.map((project) => {
          return (
            <li key={project._id}>
              <ProjectCard
              stack={project["stack"]}
              liveLink={project.liveLink}
repoLink={project.repoLink}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
