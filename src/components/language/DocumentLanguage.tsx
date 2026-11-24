"use client";

import { useEffect } from "react";

export function DocumentLanguage({ languageTag }: { languageTag: string }) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = languageTag;
    return () => {
      html.lang = "en";
    };
  }, [languageTag]);

  return null;
}
