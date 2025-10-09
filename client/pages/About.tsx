import { PlaceholderSection } from "@/components/layout/PlaceholderSection";
import { timeline, values, skills } from "@/data/about";

export default function About() {
  return (
    <div className="space-y-12">
      <div className="animate-entrance">
        <PlaceholderSection
          eyebrow=""
          title="Robin – Software Developer"
          description="Passionate about creating meaningful digital solutions through clean code and thoughtful design. I enjoy building tools that make a difference."
          cta={{ label: "View projects", to: "/projects" }}
          additionalButtons={
          <>
            <button
              onClick={() => {
                const element = document.getElementById('professional-timeline');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
              Professional Timeline
              <span className="font-mono text-xs">↓</span>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('volunteer-work');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
              Volunteer Work
              <span className="font-mono text-xs">↓</span>
            </button>
          </>
        }
      />
      </div>

      <section className="grid gap-8 rounded-3xl border-[3px] border-foreground bg-card p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] relative z-10 overflow-hidden animate-slide-up delay-300">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--foreground)/0.12)_0%,_transparent_60%)]" />
        <div className="space-y-6 animate-fade-in delay-100">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Values</h2>
          <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
            I focus on building solutions that truly make a difference through creative  thinking and innovation. Every project is an opportunity to drive positive change with user-focused design.
          </p>
          <div className="grid gap-3 text-sm uppercase tracking-[0.25em] text-foreground/70 md:grid-cols-2">
            {values.map((value, index) => {
              const delayClasses = ['delay-200', 'delay-300', 'delay-400', 'delay-500'];
              return (
                <div 
                  key={value.id}
                  className={`rounded-2xl border-[3px] border-foreground bg-secondary px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative overflow-hidden animate-scale-in ${delayClasses[index]}`}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                  {value.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-6 animate-fade-in delay-200">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Skills</h2>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70">
            {skills.map((skill, index) => {
              const skillDelayClasses = ['delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800'];
              return (
                <span
                  key={skill.id}
                  className={`rounded-lg border-[3px] border-foreground bg-background px-4 py-2 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.4)] relative z-10 overflow-hidden animate-scale-in ${skillDelayClasses[index % skillDelayClasses.length]}`}
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section id="professional-timeline" className="rounded-3xl border-[3px] border-foreground bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] relative z-10 overflow-hidden animate-slide-up delay-500">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_center,_hsl(var(--foreground)/0.1)_0%,_transparent_60%)]" />
        <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Professional Timeline</h2>
        <div className="mt-6 space-y-5">
          {timeline.filter(item => !item.title.includes('dotDAGENE') && !item.title.includes('Linjeforeningen Online')).map((item, index) => {
            const timelineDelayClasses = ['delay-600', 'delay-700', 'delay-800', 'delay-900'];
            return (
              <div
                key={`${item.startDate}-${item.title}`}
                className={`flex flex-col gap-3 rounded-2xl border-[3px] border-foreground bg-background px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.45)] relative z-10 overflow-hidden animate-entrance ${timelineDelayClasses[index % timelineDelayClasses.length]}`}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
                <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-foreground/70">
                  {item.startDate} – {item.endDate}
                </span>
                <div className="space-y-1 text-sm text-foreground/75">
                  <p className="font-heading font-semibold uppercase tracking-[0.2em] text-foreground">
                    {item.title}
                  </p>
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="volunteer-work" className="rounded-3xl border-[3px] border-foreground bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] transition hover:-translate-y-1.5 hover:shadow-[10px_10px_0_0_hsl(var(--foreground)/0.7)] relative z-10 overflow-hidden animate-slide-up delay-700">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_center,_hsl(var(--foreground)/0.1)_0%,_transparent_60%)]" />
        <h2 className="text-2xl font-heading font-bold uppercase tracking-[0.25em]">Volunteer Work</h2>
        <div className="mt-6 space-y-5">
          {timeline.filter(item => item.title.includes('dotDAGENE') || item.title.includes('Linjeforeningen Online')).map((item, index) => {
            const volunteerDelayClasses = ['delay-800', 'delay-900', 'delay-1000'];
            return (
              <div
                key={`${item.startDate}-${item.title}`}
                className={`flex flex-col gap-3 rounded-2xl border-[3px] border-foreground bg-background px-5 py-4 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.45)] relative z-10 overflow-hidden animate-entrance ${volunteerDelayClasses[index % volunteerDelayClasses.length]}`}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_hsl(var(--foreground)/0.02)_0%,_transparent_70%)]" />
                <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-foreground/70">
                  {item.startDate} – {item.endDate}
                </span>
                <div className="space-y-1 text-sm text-foreground/75">
                  <p className="font-heading font-semibold uppercase tracking-[0.2em] text-foreground">
                    {item.title}
                  </p>
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
