import "server-only"

import type { Locale } from "./config"
import type { Dictionary } from "./types"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}
