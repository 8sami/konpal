import Image from "next/image"

import { Reveal } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

export function PurposeSection({ copy }: { copy: HomeDictionary["purpose"] }) {
  return (
    <section
      aria-labelledby="purpose-title"
      className="purpose-section section-forest"
      id="purpose"
    >
      <div aria-hidden="true" className="purpose-plant">
        <Image
          alt=""
          className="purpose-sprout"
          height={908}
          sizes="(max-width: 48rem) 62vw, 34vw"
          src="/sprout.webp"
          width={1013}
        />
        <span className="purpose-drop purpose-drop-one">
          <Image
            alt=""
            className="purpose-drop-image"
            height={169}
            src="/droplet.webp"
            width={160}
          />
        </span>
        <span className="purpose-drop purpose-drop-two">
          <Image
            alt=""
            className="purpose-drop-image"
            height={169}
            src="/droplet.webp"
            width={160}
          />
        </span>
      </div>
      <div className="purpose-inner container">
        <div className="purpose-lead">
          <Reveal className="purpose-heading">
            <h2 id="purpose-title">{copy.title}</h2>
          </Reveal>
        </div>
        <div className="purpose-copy">
          <Reveal>
            <p className="purpose-definition">{copy.definition}</p>
          </Reveal>
          <dl className="purpose-principles">
            {copy.principles.map((principle) => (
              <div key={principle.title}>
                <dt>{principle.title}</dt>
                <dd>{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
