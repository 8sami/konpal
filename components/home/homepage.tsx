import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { PLANTED_TREES, TREE_GOAL } from "@/components/home/content"
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
import { formatMessage } from "@/i18n/format"
import type {
  CommonDictionary,
  FooterDictionary,
  HeaderDictionary,
  HomeDictionary,
} from "@/i18n/types"
import { contactEmail } from "@/lib/site"

function participationLink(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
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
  common,
  content,
  footer,
  header,
  locale,
}: {
  common: CommonDictionary
  content: HomeDictionary
  footer: FooterDictionary
  header: HeaderDictionary
  locale: string
}) {
  return (
    <div className="marketing-site" id="top">
      <Header common={common} copy={header} navigation={content.navigation} />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-inner container">
            <div className="hero-copy">
              <h1 id="hero-title">{content.hero.title}</h1>
              <p className="hero-description">{content.hero.description}</p>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href={participationLink(content.hero.primarySubject)}
                >
                  {content.hero.primaryCta}{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <Link className="button-secondary" href="#purpose">
                  {content.hero.secondaryCta}{" "}
                  <ArrowDown aria-hidden="true" size={16} />
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
            <p className="hero-caption">{common.tagline}</p>
          </div>
        </section>

        <div className="scroll-stack">
          <section
            aria-labelledby="goal-title"
            className="goal-section section-paper"
          >
            <div className="goal-inner container">
              <div className="goal-copy reveal">
                <h2 id="goal-title">
                  {formatMessage(content.goal.title, {
                    count: TREE_GOAL.toLocaleString(locale),
                  })}
                </h2>
                <p className="lead">{content.goal.lead}</p>
              </div>
              <div className="goal-figure reveal">
                <p className="goal-number">
                  <CountUp locale={locale} value={TREE_GOAL} />
                </p>
                <p className="goal-caption">{content.goal.caption}</p>
                <div className="progress-note" aria-live="polite">
                  {PLANTED_TREES === null ? (
                    <p>{content.goal.progressPending}</p>
                  ) : (
                    <p>
                      {formatMessage(content.goal.progressPlanted, {
                        count: PLANTED_TREES.toLocaleString(locale),
                      })}
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
                  <h2 id="purpose-title">{content.purpose.title}</h2>
                </Reveal>
              </div>
              <div className="purpose-copy">
                <Reveal>
                  <p className="purpose-definition">
                    {content.purpose.definition}
                  </p>
                </Reveal>
                <dl className="purpose-principles">
                  {content.purpose.principles.map((principle) => (
                    <div key={principle.title}>
                      <dt>{principle.title}</dt>
                      <dd>{principle.description}</dd>
                    </div>
                  ))}
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
              <h2 id="ways-title">{content.ways.title}</h2>
              <p className="lead">{content.ways.lead}</p>
            </div>
            <div className="ways-columns">
              {content.ways.cards.map((card, index) => (
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

        <section
          aria-label={content.statement.ariaLabel}
          className="statement-section section-sprout"
        >
          <div className="statement-inner container">
            <RevealWords text={content.statement.text} />
            <p className="statement-signoff">{content.statement.signoff}</p>
          </div>
        </section>

        <section
          aria-labelledby="options-title"
          className="options-section section-paper"
        >
          <div className="options-layout container">
            <div className="options-heading reveal">
              <h2 id="options-title">{content.options.title}</h2>
              <p className="lead">{content.options.lead}</p>
            </div>
            <div className="options-list">
              {content.options.items.map((option, index) => (
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
              <h2 id="plantations-title">{content.plantation.title}</h2>
              <p className="lead">{content.plantation.lead}</p>
            </Reveal>
            <div className="plantation-story reveal">
              <p>{content.plantation.body}</p>
              <a href={participationLink(content.plantation.subject)}>
                {content.plantation.cta}{" "}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <div className="scroll-stack scroll-stack-marquee">
          <Marquee copy={content.marquee} />

          <section
            aria-labelledby="values-title"
            className="values-section section-forest"
          >
            <div className="values-inner container">
              <Reveal className="values-heading">
                <h2 id="values-title">{content.values.title}</h2>
              </Reveal>
              <div className="values-grid">
                {content.values.items.map((item, index) => (
                  <Reveal delay={index * 70} key={item}>
                    <p>{item}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="scroll-stack">
          <FaqSection copy={content.faq} />

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
                <h2 id="contact-title">{content.contact.title}</h2>
                <p className="lead">{content.contact.lead}</p>
                <a
                  className="button-primary button-cream"
                  href={participationLink(content.contact.subject)}
                >
                  {content.contact.cta}{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </Reveal>
            </div>
          </section>
        </div>
      </main>
      <Footer common={common} copy={footer} />
    </div>
  )
}
