import { BouncyAccordion } from "@/components/motion/bouncy-accordion"
import { faqItems } from "@/components/home/content"

export function FaqSection() {
  const items = faqItems.map((item, index) => ({
    id: index === 0 ? "meaning" : `question-${index}`,
    title: item.question,
    description: item.answer,
  }))

  return (
    <section className="faq-section section-paper" id="questions">
      <div className="faq-layout container">
        <div className="faq-heading reveal">
          <h2>Questions about planting</h2>
          <p className="lead">
            Clear answers about taking part and planting with care.
          </p>
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
