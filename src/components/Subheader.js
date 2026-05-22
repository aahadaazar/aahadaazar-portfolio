import React, { useEffect, useState } from "react";
import { Linkedin, Github, FileText, Mail, Moon, Sun } from "lucide-react";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aahad-aazar-b83b77197/",
    icon: Linkedin,
  },
  {
    title: "Github",
    link: "https://github.com/aahadaazar",
    icon: Github,
  },
  {
    title: "Medium",
    link: "https://medium.com/@abdulaahadaazar",
    icon: FileText,
  },
  {
    title: "Email",
    link: "mailto:aahadaazar@hotmail.com",
    icon: Mail,
  },
];

function Subheader() {
  const [isDark, setIsDark] = useState(false);

  // Sync state with hydration script
  useEffect(() => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center justify-center mb-12 z-10 relative">
      <div className="flex space-x-4 p-3 rounded-full bg-paper-2 border border-rule backdrop-blur-md items-center">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-[var(--dur-micro)] ease-out flex items-center justify-center"
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="sr-only">{item.title}</span>
            </a>
          );
        })}
        <div className="w-px h-4 bg-rule mx-1"></div>
        <button
          onClick={toggleTheme}
          className="relative flex items-center p-1 w-12 h-6 rounded-full bg-rule cursor-pointer hover:bg-neutral transition-colors duration-[var(--dur-short)] ease-[var(--ease-out)]"
          aria-label="Toggle theme"
        >
          <div
            className={`flex items-center justify-center w-4 h-4 rounded-full bg-paper shadow-md transform transition-all duration-[var(--dur-long)] ease-[var(--ease-out)] ${
              isDark ? "translate-x-6 rotate-[360deg]" : "translate-x-0 rotate-0"
            }`}
          >
            {isDark ? (
              <Moon size={10} strokeWidth={2.5} className="text-accent" />
            ) : (
              <Sun size={10} strokeWidth={2.5} className="text-ink" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Subheader;
