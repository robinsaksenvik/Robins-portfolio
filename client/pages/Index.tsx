import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/projects";

const quickLinks = [
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/find-me" },
];


export default function Index() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <QuickLinks />
      <ProjectsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-secondary via-background to-secondary p-10 shadow-[8px_8px_0_0_hsl(var(--foreground)/0.65)] z-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_hsl(var(--foreground)/0.08)_0%,_transparent_55%)]" />
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-foreground/70 relative z-10">
            Retro maker
          </span>
          <h1 className="text-4xl font-heading font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hello.
            <br />I'm Robin.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            I build experimental code experiences with retro aesthetics and modern technology. The portfolio gathers
            handpicked projects, learning notes and resources for creators.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
            <span>
              Robin S. Karlsen
            </span>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <RetroIllustration />
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.2em]">Quick links</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="pressable group flex items-center justify-between gap-4 rounded-xl border border-foreground/40 bg-secondary px-5 py-4 font-heading font-semibold text-sm uppercase tracking-[0.2em] relative z-10"
          >
            {link.label}
            <span className="font-mono text-base transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-[0.25em]">Projects</h2>
        <Link
          to="/projects"
          className="pressable relative flex items-center gap-2 rounded-md border border-foreground/30 bg-background px-4 py-2 text-sm font-medium uppercase tracking-[0.18em]"
        >
          View all projects
          <span className="font-mono text-sm">→</span>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/40 bg-card shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] relative z-10"
          >
            <div className="flex items-center justify-between border-b border-foreground/30 bg-secondary px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/70 relative z-10">
              <span className="font-mono text-[0.65rem]">{project.date}</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-foreground/40" />
                <span className="h-2 w-2 rounded-full bg-foreground/40" />
                <span className="h-2 w-2 rounded-full bg-foreground/40" />
              </div>
            </div>
            <div className="relative aspect-[5/3] w-full overflow-hidden border-b border-foreground/30">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover saturate-0 transition duration-500 group-hover:saturate-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-4 px-5 py-6">
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-semibold uppercase tracking-[0.2em]">{project.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  {project.summary}
                </p>
              </div>
              <Link
                to={`/projects#${project.slug}`}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-foreground/30 bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                View project
                <span className="font-mono text-sm">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RetroIllustration() {
  return (
    <div className="relative aspect-square w-full rounded-3xl border border-foreground/40 bg-background p-6 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.65)] z-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_hsl(var(--foreground)/0.1)_0%,_transparent_65%)]" />
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label="Retro robot designer"
        className="h-full w-full text-foreground"
      >
        <rect x="70" y="70" width="180" height="140" rx="28" fill="currentColor" opacity={0.1} />
        <rect x="85" y="85" width="150" height="110" rx="24" fill="currentColor" opacity={0.2} />
        <rect
          x="100"
          y="100"
          width="120"
          height="80"
          rx="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
        />
        <circle cx="160" cy="140" r="24" fill="none" stroke="currentColor" strokeWidth="10" />
        <circle cx="160" cy="140" r="10" fill="currentColor" />
        <path
          d="M120 198h80l26 46H94z"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <path
          d="M226 177c0 8-6 14-14 14s-14-6-14-14 6-14 14-14 14 6 14 14Z"
          fill="currentColor"
        />
        <path
          d="M234 90c0-12-10-22-22-22h-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M84 90c0-12 10-22 22-22h20"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M260 240c-5 18-18 28-46 28H106c-28 0-41-10-46-28"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M220 260c14 18 39 28 44 16 4-10-10-26-24-36 4-18 20-42 20-42s-38 12-50 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="238" cy="198" r="12" fill="currentColor" />
      </svg>
    </div>
  );
}
