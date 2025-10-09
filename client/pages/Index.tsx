import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/projects";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { FolderOpen, User, MessageSquare, ExternalLink, Github } from "lucide-react";

const quickLinks = [
  { label: "Projects", to: "/projects", icon: FolderOpen },
  { label: "About", to: "/about", icon: User },
  { label: "Contact", to: "/find-me", icon: MessageSquare },
];


export default function Index() {
  return (
    <div className="space-y-20">
      <div className="animate-entrance">
        <HeroSection />
      </div>
      <div className="animate-slide-up delay-300">
        <QuickLinks />
      </div>
      <div className="animate-slide-up delay-500">
        <ProjectsSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="group relative overflow-hidden rounded-2xl border-[3px] border-foreground bg-gradient-to-b from-secondary via-background to-secondary p-10 shadow-[8px_8px_0_0_hsl(var(--foreground)/0.65)] transition hover:-translate-y-1.5 hover:shadow-[12px_12px_0_0_hsl(var(--foreground)/0.7)] z-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_hsl(var(--foreground)/0.08)_0%,_transparent_55%)] animate-fade-in delay-100" />
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-6 lg:flex-1">
          
          <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[150px] flex items-end animate-slide-up delay-100">
            <h1 className="text-4xl font-heading font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <TypewriterText 
                text="Hello. I'm Robin."
                speed={150}
                delay={500}
              />
            </h1>
          </div>
          <div className="max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg min-h-[140px] sm:min-h-[120px] animate-slide-up delay-200">
            <TypewriterText 
              text="I create digital solutions through creative innovation and user-focused design. Driven by initiative and collaborative thinking to build meaningful connections between people and technology."
              speed={50}
              delay={3000}
              showCursor={false}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70 animate-fade-in delay-300">
            <span>
              Robin S. Karlsen
            </span>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 w-full max-w-sm lg:flex-shrink-0 animate-scale-in delay-200">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const delayClasses = ['delay-100', 'delay-200', 'delay-300'];
  
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.2em]">Quick links</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {quickLinks.map((link, index) => (
          <div
            key={link.label}
            className={`animate-scale-in ${delayClasses[index]}`}
          >
            <Link
              to={link.to}
              className="pressable group flex items-center justify-between gap-4 rounded-xl border-[3px] border-foreground bg-secondary px-5 py-4 font-heading font-semibold text-sm uppercase tracking-[0.2em] relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_hsl(var(--foreground)/0.06)_0%,_transparent_50%)]" />
              <div className="flex items-center gap-2">
                <link.icon size={16} className="opacity-70" />
                {link.label}
              </div>
              <span className="font-mono text-base transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between animate-fade-in delay-100">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-[0.25em]">Projects</h2>
        <Link
          to="/projects"
          className="pressable relative flex items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
          View all projects
          <span className="font-mono text-sm">→</span>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const projectDelayClasses = ['delay-200', 'delay-400'];
          return (
            <article
              key={project.slug}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-foreground bg-card shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[12px_12px_0_0_hsl(var(--foreground)/0.7)] relative z-10 animate-fade-in ${projectDelayClasses[index]}`}
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--foreground)/0.05)_0%,_transparent_60%)]" />
              <div className="flex items-center justify-between border-b-[3px] border-foreground bg-secondary px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/70 relative z-10">
                <span className="font-mono text-[0.65rem]">{project.date}</span>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-foreground/40" />
                  <span className="h-2 w-2 rounded-full bg-foreground/40" />
                  <span className="h-2 w-2 rounded-full bg-foreground/40" />
                </div>
              </div>
              <div className="relative aspect-[5/3] w-full overflow-hidden border-b-[3px] border-foreground">
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
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none overflow-hidden"
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
                  View project
                  <span className="font-mono text-sm">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="/robin-profile.jpg"
        alt="Robin Saksenvik"
        className="h-96 w-96 object-cover rounded-2xl border-[3px] border-foreground saturate-0 transition-all duration-300 group-hover:saturate-50"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--foreground)/0.12)_0%,_transparent_65%)] rounded-2xl" />
      <div className="absolute inset-0 bg-orange-200/5 rounded-2xl transition-opacity duration-300 group-hover:opacity-0" />
    </div>
  );
}
