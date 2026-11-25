import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import type { Dictionary } from "@/i18n/types"

import { HomeSections } from "./sections"

export function HomePage({
  dictionary,
  locale,
}: {
  dictionary: Dictionary
  locale: string
}) {
  return (
    <div className="marketing-site" id="top">
      <Header
        common={dictionary.common}
        copy={dictionary.header}
        navigation={dictionary.home.navigation}
      />
      <main id="main-content">
        <HomeSections dictionary={dictionary} locale={locale} />
      </main>
      <Footer common={dictionary.common} copy={dictionary.footer} />
    </div>
  )
}
