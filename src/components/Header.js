import React from "react";

function Header() {
  return (
    <div className="flex flex-col items-center w-full justify-center mb-6 pt-10 z-10 relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink pb-2 font-mono tracking-tighter">
        Aahad Aazar<span className="text-accent ml-1">_</span>
      </h1>

      <div className="mt-4 flex items-center space-x-3 text-muted font-mono text-xs md:text-sm uppercase tracking-widest">
        <span>Software Engineer</span>
        <span className="text-rule">•</span>
        <span>Full Stack</span>
        <span className="text-rule">•</span>
        <span>AI</span>
      </div>
    </div>
  );
}

export default Header;
