"use client";

import { useEffect, useState } from "react";

export function useResumeUrl(fallback) {
  const [url, setUrl] = useState(fallback);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/resume")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && data?.url) setUrl(data.url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [fallback]);

  return url;
}
