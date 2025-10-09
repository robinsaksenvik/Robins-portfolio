import { PlaceholderSection } from "@/components/layout/PlaceholderSection";
import { Github, Linkedin, Mail } from "lucide-react";

const platforms = [
  {
    name: "GitHub",
    handle: "@robinsaksenvik",
    url: "https://github.com/robinsaksenvik",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "Robin S. Karlsen",
    url: "https://www.linkedin.com/in/robinsaksenvikkarlsen",
    icon: Linkedin,
  },
  {
    name: "Email",
    handle: "Robin.sk@hotmail.no",
    url: "mailto:Robin.sk@hotmail.no",
    icon: Mail,
  },
];

export default function FindMe() {
  return (
    <div className="animate-entrance">
      <PlaceholderSection
        eyebrow=""
        title="Find me online"
        description="Connect with me on social platforms or reach out directly. I'm always open to discussing new opportunities and collaborations."
      >
        <div className="grid gap-4 md:grid-cols-3 animate-slide-up delay-300">
          {platforms.map((platform, index) => {
            const delayClasses = ['delay-400', 'delay-500', 'delay-600'];
            return (
              <div
                key={platform.name}
                className={`animate-scale-in ${delayClasses[index]}`}
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable flex flex-col gap-3 rounded-2xl border-[3px] border-foreground bg-background px-6 py-5 text-sm uppercase tracking-[0.25em] text-foreground/80 relative z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_70%)]" />
                  <div className="flex items-center gap-2">
                    <platform.icon size={16} className="opacity-70" />
                    <span className="text-xs text-foreground/60">{platform.name}</span>
                  </div>
                  <span className="text-lg font-heading">{platform.handle}</span>
                  <span className="font-mono text-xs">Visit ↗</span>
                </a>
              </div>
            );
          })}
        </div>
      </PlaceholderSection>
    </div>
  );
}
