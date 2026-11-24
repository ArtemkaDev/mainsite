"use client";

import { useSyncExternalStore } from "react";

const mobileViewport = "(max-width: 1000px)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(mobileViewport);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(mobileViewport).matches,
    () => false,
  );
}
