import { ArrowUpRight } from "lucide-react"

import { participationLink } from "@/components/home/participation-link"
import { UnderlineLink } from "@/components/motion/underline-link"
import type { HomeDictionary } from "@/i18n/types"

export function WaysSection({ copy }: { copy: HomeDictionary["ways"] }) {
  return (
    <section
      aria-labelledby="ways-title"
      className="ways-section section-paper"
      id="take-part"
    >
      <div className="container">
        <div className="ways-intro reveal">
          <h2 id="ways-title">{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
        </div>
        <div className="ways-columns">
          {copy.cards.map((card, index) => (
            <article
              className={`ways-column reveal ${
                index === 0 ? "ways-column-dark" : "ways-column-light"
              }`}
              key={card.title}
              style={
                index === 1
                  ? ({ "--reveal-delay": "100ms" } as React.CSSProperties)
                  : undefined
              }
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <UnderlineLink href={participationLink(card.subject)}>
                {card.cta} <ArrowUpRight aria-hidden="true" size={18} />
              </UnderlineLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
