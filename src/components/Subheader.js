import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  FileText,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aahad-aazar-b83b77197/",
    icon: Linkedin,
    external: true,
  },
  {
    title: "GitHub",
    link: "https://github.com/aahadaazar",
    icon: Github,
    external: true,
  },
  {
    title: "Medium",
    link: "https://medium.com/@abdulaahadaazar",
    icon: FileText,
    external: true,
  },
  {
    title: "Email",
    link: "mailto:aahadaazar@hotmail.com",
    icon: Mail,
    external: false,
  },
];

function Subheader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    const applyTheme = () => {
      setIsDark(newTheme === "dark");
      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", newTheme);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion && document.startViewTransition) {
      document.startViewTransition(applyTheme);
      return;
    }

    applyTheme();
  };

  return (
    <aside className="hero-index relative z-10 min-w-0" aria-label="Portfolio index">
      <div className="hero-index__block">
        <span className="hero-index__label">01 / Current</span>
        <p className="mt-3 text-lg font-medium text-ink">Software Engineer</p>
        <p className="mt-1 font-mono text-xs text-accent">Scalers</p>
      </div>

      <div className="hero-index__block">
        <span className="hero-index__label">02 / Elsewhere</span>
        <nav
          aria-label="Profiles and contact"
          className="mt-3 grid min-w-0 grid-cols-2 gap-x-4 sm:grid-cols-4 lg:grid-cols-1"
        >
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="hero-index__link group flex min-h-11 min-w-0 items-center gap-3 border-b border-rule py-2 text-muted transition-colors duration-[var(--dur-micro)] ease-out hover:text-accent focus-visible:text-accent"
                aria-label={item.title}
                title={item.title}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span className="min-w-0 flex-1 text-sm font-medium">{item.title}</span>
                {item.external && (
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="hero-index__block hero-index__theme">
        <span className="hero-index__label">03 / Appearance</span>
        <button
          onClick={toggleTheme}
          className="group mt-3 flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 border-b border-rule py-2 text-sm font-medium text-muted transition-colors duration-[var(--dur-short)] ease-[var(--ease-out)] hover:text-accent"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          aria-pressed={isDark}
          title={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
          <span>{isDark ? "Dark" : "Light"} theme</span>
          <span className="flex h-8 w-8 items-center justify-center rounded border border-rule bg-paper-2 transition-transform duration-[var(--dur-short)] group-hover:rotate-6">
            {isDark ? (
              <Moon size={15} strokeWidth={2} className="text-accent" />
            ) : (
              <Sun size={15} strokeWidth={2} className="text-ink" />
            )}
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Subheader;
