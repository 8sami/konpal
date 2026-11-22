import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"

import { FaqSection } from "@/components/home/faq"
import { FooterContent } from "@/components/home/footer"
import { Marquee } from "@/components/home/marquee"
import { Header } from "@/components/home/header"
import {
  PLANTED_TREES,
  TREE_GOAL,
  contactEmail,
  participationOptions,
} from "@/components/home/content"
import { StickyFooter } from "@/components/home/sticky-footer"
import {
  CountUp,
  Parallax,
  Reveal,
  RevealWords,
} from "@/components/motion/reveals"

function participationLink(title: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(title)}`
}

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
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
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
              <div className="hero-mark" aria-hidden="true">
                <span>کونپل</span>
              </div>
            </Parallax>
            <p className="hero-caption">green today, greener tomorrow</p>
          </div>
        </section>

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
                  <p>Planted-to-date progress will be shared when verified.</p>
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
          <div className="purpose-inner container">
            <Reveal className="purpose-heading">
              <h2 id="purpose-title">A fresh sprout.</h2>
              <p className="purpose-intro">
                We plant trees in hope for a greener future, choosing places
                where each tree can be cared for and protected.
              </p>
            </Reveal>
            <div className="purpose-body">
              <div className="purpose-wordmark">
                <span className="urdu-word" lang="ur" dir="rtl">
                  کونپل
                </span>
                <span className="purpose-name">Konpal</span>
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
          </div>
        </section>

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
                <a href={participationLink("Support tree planting")}>
                  Support a planting{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </article>
              <article
                className="ways-column ways-column-light reveal"
                style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              >
                <h3>Plant together</h3>
                <p>Volunteer, host a planting, or sponsor the work.</p>
                <a
                  href={`mailto:${contactEmail}?subject=Partner%20with%20Konpal`}
                >
                  Explore partnership{" "}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
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

        <FaqSection />

        <section
          aria-labelledby="contact-title"
          className="contact-section section-deep-pine"
        >
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
      </main>
      <StickyFooter>
        <FooterContent />
      </StickyFooter>
    </div>
  )
}
