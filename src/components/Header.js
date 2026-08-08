import React from "react";
import { ArrowDown, Mail } from "lucide-react";

const EMAIL_URL = "mailto:aahadaazar@hotmail.com";

function Header() {
  return (
    <div className="hero-intro min-w-0">
      <p className="hero-kicker font-mono text-xs uppercase tracking-[0.14em] text-muted">
        Product Engineer <span aria-hidden="true">/</span> Portfolio
      </p>

      <h1 className="hero-name mt-7 max-w-full font-mono text-[clamp(3.4rem,9vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.04em] text-ink">
        <span className="hero-name__line">
          <span>Aahad</span>
        </span>
        <span className="hero-name__line">
          <span>
            Aazar<span className="ml-2 text-accent">_</span>
          </span>
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-muted md:text-2xl">
        I build working products where{" "}
        <span className="font-medium text-ink">software</span>,{" "}
        <span className="font-medium text-ink">data</span>, and{" "}
        <span className="font-medium text-ink">AI</span> meet—currently as a{" "}
        <span className="font-medium text-ink">Software Engineer at Scalers</span>.
      </p>

      <p className="mt-7 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span>Software</span>
        <span aria-hidden="true" className="text-rule">•</span>
        <span>Data</span>
        <span aria-hidden="true" className="text-rule">•</span>
        <span>AI</span>
      </p>

      <div className="cta-group mt-9 max-w-md">
        <a
          href="#selected-work"
          className="hero-cta-primary cta-link gap-2 rounded border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-ink hover:bg-ink focus-visible:ring-offset-paper"
        >
          Selected work
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={EMAIL_URL}
          className="cta-link gap-2 rounded border border-rule px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:ring-offset-paper"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email Aahad
        </a>
      </div>
    </div>
  );
}

export default Header;
