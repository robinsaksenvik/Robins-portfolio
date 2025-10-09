import { PlaceholderSection } from "@/components/layout/PlaceholderSection";

const platforms = [
  {
    name: "GitHub",
    handle: "@robinsaksenvik",
    url: "https://github.com/robinsaksenvik",
  },
  {
    name: "LinkedIn",
    handle: "Robin S. Karlsen",
    url: "https://www.linkedin.com/in/robinsaksenvikkarlsen",
  },
  {
    name: "Email",
    handle: "Robin.sk@hotmail.no",
    url: "mailto:Robin.sk@hotmail.no",
  },
];

export default function FindMe() {
  return (
    <PlaceholderSection
      eyebrow=""
      title="Find me online"
      description="Connect with me on social platforms or reach out directly. I'm always open to discussing new opportunities and collaborations."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noreferrer"
            className="pressable flex flex-col gap-3 rounded-2xl border-[3px] border-foreground bg-background px-6 py-5 text-sm uppercase tracking-[0.25em] text-foreground/80 relative z-10 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_70%)]" />
            <span className="text-xs text-foreground/60">{platform.name}</span>
            <span className="text-lg font-heading">{platform.handle}</span>
            <span className="font-mono text-xs">Visit ↗</span>
          </a>
        ))}
      </div>
    </PlaceholderSection>
  );
}
