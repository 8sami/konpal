import { ArrowRight } from "lucide-react"

import { participationLink } from "@/components/home/participation-link"
import type { HomeDictionary } from "@/i18n/types"

export function OptionsSection({ copy }: { copy: HomeDictionary["options"] }) {
  return (
    <section
      aria-labelledby="options-title"
      className="options-section section-paper"
    >
      <div className="options-layout container">
        <div className="options-heading reveal">
          <h2 id="options-title">{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
        </div>
        <div className="options-list">
          {copy.items.map((option, index) => (
            <a
              className="option-row reveal"
              href={participationLink(option.title)}
              key={option.title}
              style={
                {
                  "--reveal-delay": `${index * 45}ms`,
                } as React.CSSProperties
              }
            >
              <span className="option-copy">
                <strong>{option.title}</strong>
                <span>{option.description}</span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="option-arrow"
                size={21}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
