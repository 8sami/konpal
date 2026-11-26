import { RevealWords } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

export function StatementSection({
  copy,
}: {
  copy: HomeDictionary["statement"]
}) {
  return (
    <section
      aria-label={copy.ariaLabel}
      className="statement-section section-sprout"
    >
      <div className="statement-inner container">
        <RevealWords text={copy.text} />
        <p className="statement-signoff">{copy.signoff}</p>
      </div>
    </section>
  )
}
