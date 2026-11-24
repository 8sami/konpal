import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

import {
  PLANTED_TREES,
  TREE_GOAL,
  participationOptions,
} from "@/components/home/content"
import { FaqSection } from "@/components/home/faq"
import { HeroMotion } from "@/components/home/hero-motion"
import { Marquee } from "@/components/home/marquee"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import {
  CountUp,
  Parallax,
  Reveal,
  RevealWords,
} from "@/components/motion/reveals"
import { UnderlineLink } from "@/components/motion/underline-link"
import { contactEmail } from "@/lib/site"

function participationLink(title: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(title)}`
}

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

// Leaves drift away from the neem tree in the contact section.
const contactLeaves = [
  "contact-leaf-one",
  "contact-leaf-three",
  "contact-leaf-five",
] as const

export function HomePage({
  navigation,
}: {
  navigation: {
    purpose: string
    takePart: string
    plantations: string
    questions: string
  }
}) {
  return (
    <div className="marketing-site" id="top">
      <Header labels={navigation} />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-inner container">
            <div className="hero-copy">
              <h1 id="hero-title">Plant a tree. Grow hope.</h1>
              <p className="hero-description">
                A tree planted with care can keep giving, long after planting
                day.
              </p>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href={`mailto:${contactEmail}?subject=Fund%20a%20tree`}
                >
                  Fund a tree <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a className="button-secondary" href="#purpose">
                  Discover Konpal <ArrowDown aria-hidden="true" size={16} />
                </a>
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
            <p className="hero-caption">green today, greener tomorrow</p>
          </div>
        </section>

        <div className="scroll-stack">
          <section
            aria-labelledby="goal-title"
            className="goal-section section-paper"
          >
            <div className="goal-inner container">
              <div className="goal-copy reveal">
                <h2 id="goal-title">Plant 10,000 trees with care.</h2>
                <p className="lead">
                  Each tree is planted as Sadaqah Jariyah, for a greener future.
                </p>
              </div>
              <div className="goal-figure reveal">
                <p className="goal-number">
                  <CountUp value={TREE_GOAL} />
                </p>
                <p className="goal-caption">trees we hope to plant</p>
                <div className="progress-note" aria-live="polite">
                  {PLANTED_TREES === null ? (
                    <p>
                      Planted-to-date progress will be shared when verified.
                    </p>
                  ) : (
                    <p>
                      {PLANTED_TREES.toLocaleString("en")} trees planted so far.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

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
                  <h2 id="purpose-title">A fresh sprout.</h2>
                </Reveal>
              </div>
              <div className="purpose-copy">
                <Reveal>
                  <p className="purpose-definition">
                    Konpal is the Urdu word for a fresh sprout, the first tender
                    leaf that pushes up out of the soil.
                  </p>
                </Reveal>
                <dl className="purpose-principles">
                  <div>
                    <dt>Planted with care</dt>
                    <dd>We choose places where trees can be cared for.</dd>
                  </div>
                  <div>
                    <dt>Sadaqah Jariyah</dt>
                    <dd>A lasting act of giving for a greener future.</dd>
                  </div>
                  <div>
                    <dt>Open about funding</dt>
                    <dd>Transparency is part of the work.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="ways-title"
          className="ways-section section-paper"
          id="take-part"
        >
          <div className="container">
            <div className="ways-intro reveal">
              <h2 id="ways-title">Choose how to help.</h2>
              <p className="lead">
                Fund a tree, volunteer, or partner with Konpal.
              </p>
            </div>
            <div className="ways-columns">
              <article className="ways-column ways-column-dark reveal">
                <h3>Fund trees and saplings</h3>
                <p>Fund a tree or donate saplings for a planting effort.</p>
                <UnderlineLink
                  href={participationLink("Support tree planting")}
                >
                  Support a planting{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </UnderlineLink>
              </article>
              <article
                className="ways-column ways-column-light reveal"
                style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              >
                <h3>Plant together</h3>
                <p>Volunteer, host a planting, or sponsor the work.</p>
                <UnderlineLink
                  href={`mailto:${contactEmail}?subject=Partner%20with%20Konpal`}
                >
                  Explore partnership{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </UnderlineLink>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-label="Konpal's planting principles"
          className="statement-section section-sprout"
        >
          <div className="statement-inner container">
            <RevealWords text="A tree is a promise to care for what we plant, and to be open about how it grows." />
            <p className="statement-signoff">
              Care in the ground. Transparency along the way.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="options-title"
          className="options-section section-paper"
        >
          <div className="options-layout container">
            <div className="options-heading reveal">
              <h2 id="options-title">Ways to take part.</h2>
              <p className="lead">Start with the part you can play.</p>
            </div>
            <div className="options-list">
              {participationOptions.map((option, index) => (
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

        <section
          aria-labelledby="plantations-title"
          className="plantation-section section-cream"
          id="plantations"
        >
          <div className="plantation-inner container">
            <Reveal className="plantation-head">
              <h2 id="plantations-title">The first sponsored plantation.</h2>
              <p className="lead">
                Nathiagali was Konpal’s first sponsored remote plantation.
              </p>
            </Reveal>
            <div className="plantation-story reveal">
              <p>
                Volunteer groups plant in different cities with Konpal’s
                support.
              </p>
              <a
                href={`mailto:${contactEmail}?subject=Ask%20about%20the%20Nathiagali%20plantation`}
              >
                Email Konpal <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <div className="scroll-stack scroll-stack-marquee">
          <Marquee />

          <section
            aria-labelledby="values-title"
            className="values-section section-forest"
          >
            <div className="values-inner container">
              <Reveal className="values-heading">
                <h2 id="values-title">What a tree can carry forward.</h2>
              </Reveal>
              <div className="values-grid">
                <Reveal>
                  <p>Sadaqah Jariyah, a lasting act of giving.</p>
                </Reveal>
                <Reveal delay={70}>
                  <p>A place chosen for care.</p>
                </Reveal>
                <Reveal delay={140}>
                  <p>Open information about funding.</p>
                </Reveal>
              </div>
            </div>
          </section>
        </div>

        <div className="scroll-stack">
          <FaqSection />

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
                <h2 id="contact-title">Help put down the next root.</h2>
                <p className="lead">Tell us how you would like to take part.</p>
                <a
                  className="button-primary button-cream"
                  href={`mailto:${contactEmail}?subject=Take%20part%20with%20Konpal`}
                >
                  Get in touch <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
