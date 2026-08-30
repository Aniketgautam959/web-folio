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
    <div className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_8px_30px_-18px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
        </div>
        <span className="min-w-0 truncate text-[10px] text-muted-foreground">
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
            className="object-contain object-top"
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
