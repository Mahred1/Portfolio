import { client } from "@/app/sanity/client";
import { SanityDocument } from "next-sanity";
import FeaturedProject from "./FeaturedProject";

const POST_QUERY = `*[_type == "project" && defined(slug.current)]
  { _id, title,slug,image,description,stack,category,stack,liveLink,repoLink }`;
const options = { next: { revalidate: 30 } };

const FeaturedProjectsContainer = async () => {
  const projects = await client.fetch<SanityDocument[]>(
    POST_QUERY,
    {},
    options,
  );

  return (
    <ul className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
      {projects.map((project) => {
        return (
          <li key={project._id}>
            <FeaturedProject
              slug={project.slug.current}
              title={project.title}
              description={project.description}
              category={project.category}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturedProjectsContainer;
