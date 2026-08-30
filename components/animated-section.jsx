"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedSection({ children, className, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scroll-mt-28 translate-y-5 opacity-0 transition-all duration-700 ease-out",
        visible && "translate-y-0 opacity-100",
        className
      )}>
      {children}
    </section>
  );
}
