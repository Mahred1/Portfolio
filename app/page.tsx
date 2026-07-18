import Link from "next/link";
import Button from "./_components/Button";
import FeaturedProject from "./_components/projects/FeaturedProject";
import RecentReview from "./_components/reviews/RecentReview";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      {/* Hero Section */}
      <section className="mt-6 flex w-full flex-col items-start gap-5 px-4">
        {/* Date */}
        <div className="flex items-center gap-1 font-mono text-sm tracking-tighter">
          <div className="bg-accent h-2 w-2"></div>Now / {year}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-foreground text-4xl font-bold sm:text-5xl">
            I build web products <br /> that{" "}
            <span className="text-accent">do the work </span> for people.
          </div>
          <p className="max-w-[620] text-lg text-gray-600">
            I&apos;m a full-stack developer who treats engineering as a craft
            and shipping as a habit. For the last three years I&apos;ve helped
            startups and small teams take ideas from whiteboard to production.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Button
              className="flex-row-reverse justify-center px-3 py-1 text-base font-normal"
              type="primary"
              src="icons/mail.svg"
              alt="contact"
            >
              See Projects
            </Button>
            <Button
              className="text-md justify-center px-3 py-1"
              type="secondary"
              alt="contact"
            >
              Read Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-0 flex-col">
            <p className="font-mono text-sm text-gray-600">01</p>
            <h1 className="text-2xl font-bold font-inter">Featured Projects</h1>
          </div>

          <div className="flex items-end justify-between boder-foreground border-b-2 pb-2.5">
            <p className="text-sm text-gray-600">
              A small selection. Full archive in the Projects tab.
            </p>
            <Link className="flex gap-1 items-end" href={"/projects"}>
              <span className="uppercase text-sm font-medium font-mono">
                All work
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right mt-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* container */}
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 ">
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </div>
      </section>

            {/* Recent Reviews Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          

          <div className="flex items-end justify-between boder-foreground border-b-2 pb-2.5">
           <div className="flex gap-0 flex-col">
            <p className="font-mono text-sm text-gray-600">02</p>
            <h1 className="text-2xl font-bold font-inter">Recent Reviews</h1>
          </div> 
            <Link className="flex gap-1 items-end" href={"/projects"}>
              <span className="uppercase text-sm font-medium font-mono">
                All reviews
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right mt-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* container */}
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 ">
          <RecentReview/>
          <RecentReview/>
        </div>
      </section>
    </div>
  );
}
