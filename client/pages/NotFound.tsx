import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/40 via-background to-secondary/70 px-6 py-24 text-foreground">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-3xl border-[3px] border-foreground bg-background/90 p-12 text-center shadow-[8px_8px_0_0_hsl(var(--foreground)/0.55)]">
        <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-foreground bg-secondary/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
          Error 404
        </span>
        <h1 className="text-4xl font-heading uppercase tracking-[0.3em] sm:text-5xl">Page not found</h1>
        <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
          The link you followed points to a page that hasn't been created yet. Explore my projects or go back to the homepage to continue.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground)/0.7)] transition-transform duration-150 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            To homepage
            <span className="font-mono text-sm">↗</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md border-[3px] border-foreground bg-background px-5 py-3 font-semibold shadow-[4px_4px_0_0_hsl(var(--foreground)/0.5)] transition-transform duration-150 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Explore projects
            <span className="font-mono text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
