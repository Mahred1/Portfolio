import StackTag from '@/app/_components/StackTag';
import { client } from '@/app/sanity/client';
import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {

     const project = await client.fetch<SanityDocument>(PROJECT_QUERY, await params, options);
  const projectImageUrl = project.image
    ? urlFor(project.image)?.width(550).height(310).url()
    : null;

  return (
     <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-3">
      <Link href="/" className="hover:underline font-medium">
        ← Back to projects
      </Link>
      {projectImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={projectImageUrl}
          alt={project.title}
          className="aspect-video rounded-md"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="prose">
        <div className='flex items-center gap-2'>

       {project.stack && project.stack.map((tag:string)=><StackTag key={tag} src={`/icons/${tag.toLowerCase()}.svg`}>{tag}</StackTag>)}
        </div>
        <p className='mt-4'>{project.description}</p>
      </div>
    </main>
  )
}

export default page