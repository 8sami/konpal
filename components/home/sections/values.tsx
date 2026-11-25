import { Reveal } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

export function ValuesSection({ copy }: { copy: HomeDictionary["values"] }) {
  return (
    <section
      aria-labelledby="values-title"
      className="values-section section-forest"
    >
      <div className="values-inner container">
        <Reveal className="values-heading">
          <h2 id="values-title">{copy.title}</h2>
        </Reveal>
        <div className="values-grid">
          {copy.items.map((item, index) => (
            <Reveal delay={index * 70} key={item}>
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
