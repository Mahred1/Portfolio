import Link from "next/link";
import Button from "./_components/Button";
import FeaturedProject from "./_components/projects/FeaturedProject";
import RecentReview from "./_components/reviews/RecentReview";
import ExperienceCard from "./_components/ExperienceCard";
import EducationCard from "./_components/EducationCard";
import CertificateCard from "./_components/CertificateCard";
import AchieveentCard from "./_components/AchieveentCard";
import StackCard from "./_components/StackCard";
import { Suspense } from "react";
import Loading from "./loading";
import FeaturedProjectsContainer from "./_components/projects/FeaturedProjectsContainer";
import RecentReviewsContainer from "./_components/reviews/RecentReviewsContainer";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="pb-15">
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
          <div className="flex flex-col gap-0">
            <p className="font-mono text-xs text-gray-600">01</p>
            <h1 className="font-inter text-2xl font-semibold">
              Featured Projects
            </h1>
          </div>

          <div className="boder-foreground flex items-end justify-between border-b-2 pb-3">
            <p className="text-sm text-gray-600">
              A small selection. Full archive in the Projects tab.
            </p>
            <Link className="flex items-end gap-1" href={"/projects"}>
              <span className="font-mono text-sm font-medium uppercase">
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
       <Suspense fallback={<Loading className="h-full mt-40"/>}>
        <FeaturedProjectsContainer />
      </Suspense>
      </section>

      {/* Recent Reviews Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="boder-foreground flex items-end justify-between border-b-2 pb-2.5">
            <div className="flex flex-col gap-0">
              <p className="font-mono text-xs text-gray-600">02</p>
              <h1 className="font-inter text-2xl font-semibold">
                Recent Reviews
              </h1>
            </div>
            <Link className="flex items-end gap-1" href={"/reviews"}>
              <span className="font-mono text-sm font-medium uppercase">
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
         <Suspense fallback={<Loading className="h-full mt-40"/>}>
        <RecentReviewsContainer />
      </Suspense>
      </section>

      {/* Tech-Stack Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-2.5">
            <p className="font-mono text-xs text-gray-600">03</p>
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-2xl font-semibold">Stack</h1>
              <span className="text-sm text-gray-600">
                The tools I reach for, organised by where they live.
              </span>
            </div>
          </div>
        </div>

        {/* container */}
        <ul className="mt-5 gap-3 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] ">
         <StackCard src="/icons/code.svg">Frontend</StackCard>
         <StackCard src="/icons/code.svg">Frontend</StackCard>
         <StackCard src="/icons/code.svg">Frontend</StackCard>
        </ul>
      </section>

      {/* Experience Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-2.5">
            <p className="font-mono text-xs text-gray-600">04</p>
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-2xl font-semibold">Experience</h1>
              <span className="text-sm text-gray-600">
                Three years of shipping. Most recent first.
              </span>
            </div>
          </div>
        </div>

        {/* container */}
        <ul className="mt-5 flex flex-col gap-4">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </ul>
      </section>

      {/* Education Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-2.5">
            <p className="font-mono text-xs text-gray-600">05</p>
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-2xl font-semibold">Education</h1>
              <span className="text-sm text-gray-600">
                Formal schooling and exchanges.
              </span>
            </div>
          </div>
        </div>

        {/* container */}
        <ul className="mt-5 flex flex-col gap-4">
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </ul>
      </section>

      {/* Certificates Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-2.5">
            <p className="font-mono text-xs text-gray-600">06</p>
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-2xl font-semibold">
                Certificates
              </h1>
              <span className="text-sm text-gray-600">
                Verified credentials and coursework. click to view.
              </span>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
          <CertificateCard />
          <CertificateCard />
          <CertificateCard />
          <CertificateCard />
        </div>
      </section>

      {/* Certificates Section */}

      <section className="mt-10 px-4">
        {/* header */}
        <div className="flex flex-col gap-1">
          <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-3">
            <p className="font-mono text-xs text-gray-600">07</p>
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-2xl font-semibold">
                Achievements
              </h1>
              <span className="text-sm text-gray-600">
                Recognition, talks and milestones.
              </span>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="mt-5">
          <AchieveentCard className="" />
          <AchieveentCard className="border-t-0" />
          <AchieveentCard className="border-t-0" />
          <AchieveentCard className="border-t-0" />
        </div>
      </section>
    </div>
  );
}
