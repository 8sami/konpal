export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
};

export function hasLocale(locale: string): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}
