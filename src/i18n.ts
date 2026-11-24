import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/locales";

export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;

  return { locale, messages: await getMessages(locale), timeZone: "UTC" };
});
