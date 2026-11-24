import { BouncyAccordion } from "@/components/motion/bouncy-accordion"
import type { HomeDictionary } from "@/i18n/types"

export function FaqSection({ copy }: { copy: HomeDictionary["faq"] }) {
  const items = copy.items.map((item, index) => ({
    id: index === 0 ? "meaning" : `question-${index}`,
    title: item.question,
    description: item.answer,
  }))

  return (
    <section className="faq-section section-paper" id="questions">
      <div className="faq-layout container">
        <div className="faq-heading reveal">
          <h2>{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
        </div>
        <BouncyAccordion
          className="faq-bouncy"
          classNames={{
            item: "faq-bouncy-item",
            trigger: "faq-bouncy-trigger",
            title: "faq-bouncy-title",
            chevron: "faq-bouncy-chevron",
            description: "faq-bouncy-description",
          }}
          defaultValue="meaning"
          items={items}
        />
      </div>
    </section>
  )
}
