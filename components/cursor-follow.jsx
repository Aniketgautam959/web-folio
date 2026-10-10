"use client";

import { useEffect, useState } from "react";

export function CursorFollow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (event) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block dark:!hidden"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}>
      <div className="h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
    </div>
  );
}
