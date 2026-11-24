"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, locales } from "@/lib/locales";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const language = navigator.language.toLowerCase().split("-")[0];
    const locale = locales.find(({ code, languageTag }) => code === language || languageTag === language);
    router.replace(`/${locale?.code ?? defaultLocale}/`);
  }, [router]);

  return (
    <main className="aplo-container py-12">
      <h1 className="aplo-heading">AploCoin</h1>
      <nav className="mt-4 flex gap-4" aria-label="Language">
        {locales.map(({ code, label, languageTag }) => (
          <Link key={code} href={`/${code}/`} lang={languageTag}>{label}</Link>
        ))}
      </nav>
    </main>
  );
}
