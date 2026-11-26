import { ArrowDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { HeroMotion } from "@/components/home/hero-motion"
import { participationLink } from "@/components/home/participation-link"
import { Parallax } from "@/components/motion/reveals"
import type { HomeDictionary } from "@/i18n/types"

// Positions, sizes and timings live in the `.hero-stage` variables in globals.css.
const heroAccents = [
  {
    className: "stage-daisy stage-flower",
    src: "/daisy.webp",
    width: 1795,
    height: 1799,
  },
  {
    className: "stage-anemone stage-flower",
    src: "/anemone.webp",
    width: 1761,
    height: 1795,
  },
  {
    className: "stage-ranunculus stage-flower",
    src: "/ranunculus.webp",
    width: 1681,
    height: 1700,
  },
  {
    className: "stage-leaf",
    src: "/leaf.webp",
    width: 1251,
    height: 1610,
  },
  {
    className: "stage-leaf stage-leaf-two",
    src: "/leaf.webp",
    width: 1251,
    height: 1610,
  },
  {
    className: "stage-leaf stage-leaf-three",
    src: "/leaf.webp",
    width: 1251,
    height: 1610,
  },
  {
    className: "stage-leaf stage-leaf-four",
    src: "/leaf.webp",
    width: 1251,
    height: 1610,
  },
] as const

export function HeroSection({
  copy,
  tagline,
}: {
  copy: HomeDictionary["hero"]
  tagline: string
}) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-inner container">
        <div className="hero-copy">
          <h1 id="hero-title">{copy.title}</h1>
          <p className="hero-description">{copy.description}</p>
          <div className="hero-actions">
            <a
              className="button-primary"
              href={participationLink(copy.primarySubject)}
            >
              {copy.primaryCta} <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <Link className="button-secondary" href="#purpose">
              {copy.secondaryCta} <ArrowDown aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
        <Parallax>
          <HeroMotion>
            <div className="hero-stage-content" aria-hidden="true">
              <div className="stage-ring stage-ring-outer" />
              <div className="stage-ring stage-ring-inner" />
              <div className="stage-glow" />

              <div className="stage-plant">
                <div className="stage-enter">
                  <div className="stage-plant-float">
                    <Image
                      alt=""
                      className="stage-plant-image"
                      fetchPriority="high"
                      height={1365}
                      loading="eager"
                      sizes="(max-width: 48rem) 62vw, 42vw"
                      src="/sapling.webp"
                      width={649}
                    />
                  </div>
                </div>
              </div>

              {/* Position → entrance → float → sway → rotation, kept separate. */}
              {heroAccents.map((accent) => (
                <div
                  className={`stage-accent ${accent.className}`}
                  key={accent.className}
                >
                  <div className="stage-enter">
                    <div className="stage-float">
                      <div className="stage-sway">
                        <div className="stage-rotate">
                          <Image
                            alt=""
                            className="stage-accent-image"
                            height={accent.height}
                            sizes="(max-width: 48rem) 12vw, 8vw"
                            src={accent.src}
                            width={accent.width}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </HeroMotion>
        </Parallax>
        <p className="hero-caption">{tagline}</p>
      </div>
    </section>
  )
}
