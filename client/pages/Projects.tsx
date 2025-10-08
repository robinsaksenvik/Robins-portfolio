import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-foreground/40 bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60 relative z-10">
              Project collection
            </span>
            <h1 className="text-3xl font-heading font-bold uppercase tracking-[0.3em] md:text-4xl">
              A selection of code projects
            </h1>
            <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
              The portfolio showcases experiments in creative code systems, live coding and product design. Each project is built with focus on retro aesthetics and modern web technology.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/20 bg-background px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground/70 shadow-[4px_4px_0_0_hsl(var(--foreground)/0.5)] relative z-10">
            <p>Available for commisions – get in touch via <a href="mailto:mac@retro.codes" className="underline">robin.sk@hotmail.no</a></p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="grid gap-8 rounded-3xl border border-foreground/30 bg-card p-8 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.55)] transition hover:-translate-y-[4px] hover:shadow-[9px_9px_0_0_hsl(var(--foreground)/0.6)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] relative z-10"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <span className="rounded-md border border-foreground/20 bg-secondary px-3 py-1 font-mono text-[0.65rem] relative z-10">
                  {project.date}
                </span>
                <span className="rounded-md border border-foreground/20 bg-secondary px-3 py-1 relative z-10">
                  {project.headline}
                </span>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em] md:text-3xl">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-foreground/20 bg-secondary px-3 py-1 shadow-[2px_2px_0_0_hsl(var(--foreground)/0.4)] relative z-10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable inline-flex items-center gap-2 rounded-md border border-foreground/30 bg-background px-4 py-2 font-semibold relative z-10"
                  >
                    Repo
                    <span className="font-mono text-sm">↗</span>
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-foreground/30 bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground)/0.7)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none relative z-10"
                  >
                    Live demo
                    <span className="font-mono text-sm">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-foreground/30 z-10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover saturate-0 transition duration-700 hover:saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
