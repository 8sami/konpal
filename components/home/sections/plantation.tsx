import { ArrowUpRight } from "lucide-react"

import { participationLink } from "@/components/home/participation-link"
import { Reveal } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

export function PlantationSection({
  copy,
}: {
  copy: HomeDictionary["plantation"]
}) {
  return (
    <section
      aria-labelledby="plantations-title"
      className="plantation-section section-cream"
      id="plantations"
    >
      <div className="plantation-inner container">
        <Reveal className="plantation-head">
          <h2 id="plantations-title">{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
        </Reveal>
        <div className="plantation-story reveal">
          <p>{copy.body}</p>
          <a href={participationLink(copy.subject)}>
            {copy.cta} <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
