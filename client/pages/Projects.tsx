import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border-[3px] border-foreground bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] relative z-10 overflow-hidden animate-entrance">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.06)_0%,_transparent_65%)]" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4 animate-slide-up delay-100">
            
            <h1 className="text-3xl font-heading font-bold uppercase tracking-[0.3em] md:text-4xl">
              A selection of projects
            </h1>
            <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
              This collection showcases various projects that demonstrate creative thinking and problem-solving. Each project reflects a focus on thoughtful solutions and meaningful outcomes.
            </p>
          </div>
          <div className="rounded-2xl border-[3px] border-foreground bg-background px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground/70 shadow-[4px_4px_0_0_hsl(var(--foreground)/0.5)] relative z-10 overflow-hidden animate-scale-in delay-200">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_hsl(var(--foreground)/0.03)_0%,_transparent_65%)]" />
            <p>Available for commisions – get in touch via <a href="mailto:mac@retro.codes" className="underline">robin.sk@hotmail.no</a></p>
          </div>
        </div>
      </section>

      <section className="space-y-10 animate-slide-up delay-300">
        {projects.map((project, index) => {
          const projectDelayClasses = ['delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800'];
          return (
            <article
              key={project.slug}
              id={project.slug}
              className={`group grid gap-8 rounded-3xl border-[3px] border-foreground bg-card p-8 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] relative z-10 overflow-hidden animate-entrance ${projectDelayClasses[index % projectDelayClasses.length]}`}
            >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_hsl(var(--foreground)/0.12)_0%,_transparent_60%)]" />
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/80">
                <span className="rounded-md border-[3px] border-foreground bg-secondary px-3 py-1 font-mono text-[0.65rem] relative z-10">
                  {project.date}
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
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/80">
                {project.stack.map((tech, techIndex) => {
                  const techDelayClasses = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
                  return (
                    <span
                      key={tech}
                      className={`rounded-lg border-[3px] border-foreground bg-secondary px-3 py-1 shadow-[2px_2px_0_0_hsl(var(--foreground)/0.4)] relative z-10 overflow-hidden animate-scale-in ${techDelayClasses[techIndex % techDelayClasses.length]}`}
                    >
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] animate-fade-in delay-300">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-4 py-2 font-semibold relative z-10 overflow-hidden"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                    Repo
                    <span className="font-mono text-sm">↗</span>
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground)/0.7)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none relative z-10"
                  >
                    Live demo
                    <span className="font-mono text-sm">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border-[3px] border-foreground z-10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover saturate-0 transition duration-500 group-hover:saturate-50"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
            </div>
          </article>
          );
        })}
      </section>
    </div>
  );
}
