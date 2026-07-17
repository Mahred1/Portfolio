import Button from "./_components/Button";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-6 flex w-full flex-col items-start gap-5 px-3">
      {/* Date */}
      <div className="flex items-center gap-1 font-mono text-sm tracking-tighter">
        <div className="bg-accent h-2 w-2"></div>Now / {year}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-foreground text-4xl font-bold sm:text-5xl">
          I build web products <br /> that <span className="text-accent">do the work </span> for people.
        </div>
        <p className="max-w-[620] text-lg">I&apos;m a full-stack developer who treats engineering as a craft and shipping as a habit. For the last three years I&apos;ve helped startups and small teams take ideas from whiteboard to production.</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <Button className="flex-row-reverse justify-center px-3 py-1 text-base font-normal" type="primary" src="icons/mail.svg" alt="contact">
            See Projects
          </Button>
          <Button className="text-md justify-center px-3 py-1" type="secondary" alt="contact">
            Read Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
