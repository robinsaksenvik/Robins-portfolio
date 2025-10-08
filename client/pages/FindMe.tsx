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
    url: "www.linkedin.com/in/robinsaksenvikkarlsen",
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
      title="Find me online"
      description="I share work-in-progress, tutorials and livestreams on several platforms. Follow the journey and say hello if you want to collaborate."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noreferrer"
            className="pressable flex flex-col gap-3 rounded-2xl border border-foreground/30 bg-background px-6 py-5 text-sm uppercase tracking-[0.25em] text-foreground/80 relative z-10"
          >
            <span className="text-xs text-foreground/60">{platform.name}</span>
            <span className="text-lg font-heading">{platform.handle}</span>
            <span className="font-mono text-xs">Visit ↗</span>
          </a>
        ))}
      </div>
    </PlaceholderSection>
  );
}
