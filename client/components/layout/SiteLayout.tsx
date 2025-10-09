import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/find-me", label: "Find me" },
];

export function SiteLayout() {
  const location = useLocation();

  // Handle scrolling when route or hash changes
  useEffect(() => {
    // If there's a hash (like #possimus), scroll to that element
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Scroll to element and center it in viewport
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div 
      className="flex min-h-screen flex-col bg-background text-foreground relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, hsl(var(--background)) 0%, hsl(var(--background)/0.8) 37.5%, transparent 75%, hsl(var(--background)/0.6) 85%),
          linear-gradient(45deg, hsl(var(--foreground)/0.06) 25%, transparent 25%),
          linear-gradient(-45deg, hsl(var(--foreground)/0.06) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, hsl(var(--foreground)/0.06) 75%),
          linear-gradient(-45deg, transparent 75%, hsl(var(--foreground)/0.06) 75%)
        `,
        backgroundSize: '100% 100%, 12px 12px, 12px 12px, 12px 12px, 12px 12px',
        backgroundPosition: '0 0, 0 0, 0 6px, 6px -6px, -6px 0px',
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
    <header className="border-b-[3px] border-foreground bg-secondary relative z-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,_hsl(var(--foreground)/0.08)_0%,_transparent_50%,_hsl(var(--foreground)/0.06)_100%)]" />
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
                  "relative flex items-center gap-2 rounded-md border-[3px] border-foreground px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-150 ease-out overflow-hidden",
                  isActive 
                    ? "translate-x-[2px] translate-y-[2px] bg-foreground/10 text-foreground shadow-none" 
                    : "bg-secondary shadow-[3px_3px_0_0_hsl(var(--foreground)/0.6)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:bg-foreground/10 active:shadow-none"
                )
              }
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
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
    <footer className="border-t-[3px] border-foreground bg-secondary relative z-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,_hsl(var(--foreground)/0.06)_0%,_transparent_50%,_hsl(var(--foreground)/0.08)_100%)]" />
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
