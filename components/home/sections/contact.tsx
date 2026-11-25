import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { participationLink } from "@/components/home/participation-link"
import { Reveal } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

// Leaves drift away from the neem tree in the contact section.
const contactLeaves = [
  "contact-leaf-one",
  "contact-leaf-three",
  "contact-leaf-five",
] as const

export function ContactSection({ copy }: { copy: HomeDictionary["contact"] }) {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section section-deep-pine"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="contact-neem"
        height={1735}
        sizes="(max-width: 48rem) 70vw, 36vw"
        src="/neemtree.webp"
        width={1400}
      />
      {contactLeaves.map((leafClass) => (
        <div
          aria-hidden="true"
          className={`stage-accent contact-leaf ${leafClass}`}
          key={leafClass}
        >
          <div className="stage-enter">
            <div className="stage-float">
              <div className="stage-sway">
                <div className="stage-rotate">
                  <Image
                    alt=""
                    className="stage-accent-image"
                    height={1520}
                    sizes="(max-width: 48rem) 10vw, 5vw"
                    src="/neemleaf.webp"
                    width={566}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="contact-inner container">
        <Reveal>
          <h2 id="contact-title">{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
          <a
            className="button-primary button-cream"
            href={participationLink(copy.subject)}
          >
            {copy.cta} <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
