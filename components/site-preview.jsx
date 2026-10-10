"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VIEW_WIDTH = 1440;
const VIEW_HEIGHT = 900;

export function SitePreview({ url, title, image }) {
  const host = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : title;
  const frameRef = useRef(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    if (image || !url) return;
    const el = frameRef.current;
    if (!el) return;

    const update = () => {
      setScale(el.clientWidth / VIEW_WIDTH);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [image, url]);

  if (!url && !image) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_-30px_hsl(var(--foreground)/0.5)]">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
          <span className="h-2 w-2 rounded-full bg-primary/20" />
        </div>
        <span className="min-w-0 truncate font-mono text-[10px] text-muted-foreground">
          {host}
        </span>
      </div>
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden bg-neutral-950"
        style={{ aspectRatio: `${VIEW_WIDTH} / ${VIEW_HEIGHT}` }}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            className="pointer-events-none absolute left-0 top-0 border-0"
            style={{
              width: VIEW_WIDTH,
              height: VIEW_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        )}
      </div>
    </div>
  );
}
