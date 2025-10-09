import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/find-me", label: "Find me" },
];

export function SiteLayout() {
  return (
    <div 
      className="flex min-h-screen flex-col bg-background text-foreground relative"
      style={{
        backgroundImage: `
          linear-gradient(45deg, hsl(var(--foreground)/0.06) 25%, transparent 25%),
          linear-gradient(-45deg, hsl(var(--foreground)/0.06) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, hsl(var(--foreground)/0.06) 75%),
          linear-gradient(-45deg, transparent 75%, hsl(var(--foreground)/0.06) 75%)
        `,
        backgroundSize: '12px 12px',
        backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
        animation: 'subtlePattern 5s linear infinite'
      }}
    >
      <SiteHeader />
      <main className="mx-auto flex-1 w-full max-w-[1100px] px-6 pb-20 pt-12 md:px-10 relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b-[3px] border-foreground bg-secondary relative z-20">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-heading font-semibold uppercase tracking-[0.2em] text-foreground"
        >
          
          Robin's Portfolio
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-2">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "relative flex items-center gap-2 rounded-md border-[3px] border-foreground px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-150 ease-out",
                  isActive 
                    ? "translate-x-[2px] translate-y-[2px] bg-foreground/10 text-foreground shadow-none" 
                    : "bg-secondary shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:bg-foreground/10 active:shadow-none"
                )
              }
            >
              <span>{label}</span>
              <span className="font-mono text-xs">→</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-foreground bg-secondary relative z-20">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-foreground/80 md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} Robin's Portfolio</span>
        <span className="flex items-center gap-2">
          <span className="font-mono text-sm">Contact:</span>
          <a href="mailto:robin.sk@hotmail.no" className="underline-offset-4 hover:underline">
            robin.sk@hotmail.no
          </a>
        </span>
      </div>
    </footer>
  );
}
