import React, { useEffect, useRef } from "react";

function HeroFrame({ children }) {
  const frameRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(
    () => () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  const setSignalPosition = (position) => {
    if (!frameRef.current) return;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      frameRef.current?.style.setProperty("--hero-signal-x", `${position}px`);
    });
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const bounds = frameRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const markerWidth = 80;
    const position = Math.max(
      0,
      Math.min(bounds.width - markerWidth, event.clientX - bounds.left - markerWidth / 2),
    );
    setSignalPosition(position);
  };

  return (
    <header
      ref={frameRef}
      className="portfolio-hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setSignalPosition(0)}
    >
      <span className="hero-scan" aria-hidden="true" />
      <span className="hero-signal" aria-hidden="true" />
      {children}
    </header>
  );
}

export default HeroFrame;
