import { TextLoop } from "@/components/home/text-loop"
import type { HomeDictionary } from "@/i18n/types"

export function Marquee({ copy }: { copy: HomeDictionary["marquee"] }) {
  return (
    <section aria-label={copy.ariaLabel} className="marquee-section">
      <TextLoop text={copy.text} />
    </section>
  )
}
