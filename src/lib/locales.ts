export const locales = [
  { code: "en", languageTag: "en", label: "English", flag: "/flags/gb.svg" },
  { code: "ua", languageTag: "uk", label: "Українська", flag: "/flags/ua.svg" },
  { code: "ru", languageTag: "ru", label: "Русский", flag: "/flags/ru.svg" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return locales.some(({ code }) => code === value);
}
