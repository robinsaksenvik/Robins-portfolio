import { Link } from "react-router-dom";

import type { ReactNode } from "react";

interface PlaceholderSectionProps {
  title: string;
  description: string;
  eyebrow?: string;
  cta?: {
    label: string;
    to: string;
  };
  children?: ReactNode;
}

export function PlaceholderSection({
  title,
  description,
  eyebrow = "Work in progress",
  cta,
  children,
}: PlaceholderSectionProps) {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-[3px] border-foreground bg-secondary p-10 shadow-[6px_6px_0_0_hsl(var(--foreground)/0.6)] relative z-10">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-foreground bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60 relative z-10">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-heading font-bold uppercase tracking-[0.3em] md:text-4xl">{title}</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-base">
            {description}
          </p>
          {cta ? (
            <Link
              to={cta.to}
              className="pressable inline-flex w-fit items-center gap-3 rounded-md border-[3px] border-foreground bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] relative z-10"
            >
              {cta.label}
              <span className="font-mono text-sm">↗</span>
            </Link>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
