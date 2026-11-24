import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation/component";
import CustomFooter from "@/components/footer/Footer";
import { DocumentLanguage } from "@/components/language/DocumentLanguage";
import { getMessages } from "@/i18n";
import { isLocale, locales } from "@/lib/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(({ code }) => ({ locale: code }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages(locale);
  const languageTag = locales.find(({ code }) => code === locale)!.languageTag;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <DocumentLanguage languageTag={languageTag} />
      <Navigation />
      {children}
      <CustomFooter />
    </NextIntlClientProvider>
  );
}
