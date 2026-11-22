import { Minus, Plus } from "lucide-react"

import { Accordion } from "@/components/ui/accordion"
import { faqItems } from "@/components/home/content"

export function FaqSection() {
  return (
    <section className="faq-section section-paper" id="questions">
      <div className="faq-layout container">
        <div className="faq-heading reveal">
          <h2>Questions about planting</h2>
          <p className="lead">
            Clear answers about taking part and planting with care.
          </p>
        </div>
        <Accordion.Root className="faq-list" defaultValue={["meaning"]}>
          {faqItems.map((item, index) => {
            const value = index === 0 ? "meaning" : `question-${index}`

            return (
              <Accordion.Item className="faq-item" key={value} value={value}>
                <Accordion.Header className="faq-header">
                  <Accordion.Trigger className="faq-trigger">
                    <span>{item.question}</span>
                    <span className="faq-icons" aria-hidden="true">
                      <Plus className="faq-plus" size={20} />
                      <Minus className="faq-minus" size={20} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="faq-panel">
                  <p>{item.answer}</p>
                </Accordion.Panel>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
      </div>
    </section>
  )
}
