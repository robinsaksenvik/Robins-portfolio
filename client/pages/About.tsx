import { PlaceholderSection } from "@/components/layout/PlaceholderSection";

const timeline = [
  {
    year: "2024",
    title: "Full-time creative coder",
    detail:
      "Working with experimental code experiences for creative studios and performing artists. Focus on interactive installations and live performances.",
  },
  {
    year: "2022",
    title: "Launched retro portfolio",
    detail:
      "Built the first version of this portfolio with the goal of combining nostalgia with modern web technology.",
  },
  {
    year: "2020",
    title: "Started Mac Codes",
    detail:
      "Published tutorials and streams about creative code systems. Quickly became a gathering point for retro UI enthusiasts.",
  },
];

const skills = [
  "React & TypeScript",
  "Creative coding",
  "WebGL & Three.js",
  "Realtime UX",
  "Design systems",
  "Audio/visual sync",
];

export default function About() {
  return (
    <div className="space-y-12">
      <PlaceholderSection
        eyebrow="About me"
        title="Mac – retro maker & coder"
        description="I build digital experiences with a retrofuturistic twist. The goal is to create tools and scenes where creativity can flow freely – from live coding on stage to minimalist dashboards for creators."
        cta={{ label: "View projects", to: "/projects" }}
      />

      <section className="grid gap-8 rounded-3xl border-[3px] border-foreground bg-card p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.55)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--foreground)/0.05)_0%,_transparent_65%)]" />
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Values</h2>
          <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
            I believe in playful collaboration, clear frameworks and small details that make people smile. Every line of code should feel at home in a classic machine, yet delivered with modern performance and accessibility.
          </p>
          <div className="grid gap-3 text-sm uppercase tracking-[0.25em] text-foreground/70 md:grid-cols-2">
            <div className="rounded-2xl border-[3px] border-foreground bg-secondary px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
              Experimental design
            </div>
            <div className="rounded-2xl border-[3px] border-foreground bg-secondary px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
              User focus
            </div>
            <div className="rounded-2xl border-[3px] border-foreground bg-secondary px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
              Open source
            </div>
            <div className="rounded-2xl border-[3px] border-foreground bg-secondary px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
              Performing arts
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Skills</h2>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border-[3px] border-foreground bg-background px-4 py-2 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative z-10 overflow-hidden"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border-[3px] border-foreground bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.5)] relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_center,_hsl(var(--foreground)/0.04)_0%,_transparent_60%)]" />
        <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Timeline</h2>
        <div className="mt-6 space-y-5">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex flex-col gap-2 rounded-2xl border-[3px] border-foreground bg-background px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.45)] md:flex-row md:items-start md:justify-between relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
              <span className="text-sm font-heading font-semibold uppercase tracking-[0.25em] text-foreground">
                {item.year}
              </span>
              <div className="max-w-xl space-y-1 text-sm text-foreground/75">
                <p className="font-heading font-semibold uppercase tracking-[0.2em] text-foreground">
                  {item.title}
                </p>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
