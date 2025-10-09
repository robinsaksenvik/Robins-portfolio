import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-50
        inline-flex items-center justify-center
        w-12 h-12
        rounded-full
        border-[3px] border-foreground
        bg-background
        shadow-[4px_4px_0_0_hsl(var(--foreground)/0.6)]
        transition-all duration-300 ease-out
        hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground)/0.6)]
        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
        overflow-hidden
        ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "translate-y-8 opacity-0 pointer-events-none scale-90"
        }
      `}
      style={{ 
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.9)',
        opacity: isVisible ? 1 : 0
      }}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />
      <span className="font-mono text-lg font-bold">↑</span>
    </button>
  );
}