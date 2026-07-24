import { client } from "@/app/sanity/client";
import { SanityDocument } from "next-sanity";
import ProjectCard from "./ProjectCard";

const POST_QUERY = `*[_type == "project" && defined(slug.current)]
  { _id, title,slug,image,description,stack,category,stack,liveLink,repoLink }`;
const options = { next: { revalidate: 30 } };

const ProjectsContainer = async ({ params }: { params: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const { filter = "all" } = await params;
  console.log(filter);
  const projects = await client.fetch<SanityDocument[]>(POST_QUERY, {}, options);

  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-5">
      {filter === "all"
        ? projects.map((project) => {
            return (
              <li key={project._id}>
                <ProjectCard slug={project.slug.current} stack={project["stack"]} liveLink={project.liveLink} repoLink={project.repoLink} title={project.title} description={project.description} category={project.category} />
              </li>
            );
          })
        : projects
            .filter((project) => project.category === filter)
            .map((project) => {
              return (
                <li key={project._id}>
                  <ProjectCard slug={project.slug.current} stack={project["stack"]} liveLink={project.liveLink} repoLink={project.repoLink} title={project.title} description={project.description} category={project.category} />
                </li>
              );
            })}
    </ul>
  );
};

export default ProjectsContainer;
