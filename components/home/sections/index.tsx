import { Fragment, type ReactNode } from "react"

import type { Dictionary } from "@/i18n/types"

import { ContactSection } from "./contact"
import { FaqSection } from "./faq"
import { GoalSection } from "./goal"
import { HeroSection } from "./hero"
import { MarqueeSection } from "./marquee"
import { OptionsSection } from "./options"
import { PlantationSection } from "./plantation"
import { PurposeSection } from "./purpose"
import { ScrollStack } from "./scroll-stack"
import { StatementSection } from "./statement"
import { ValuesSection } from "./values"
import { WaysSection } from "./ways"

export type HomeSectionProps = {
  dictionary: Dictionary
  locale: string
}

export type HomeSectionDefinition = {
  key: string
  render: (props: HomeSectionProps) => ReactNode
  /**
   * Adjacent sections opt into a scroll stack with `sticky` + `overlay`:
   * the sticky section pins while the overlay section scrolls over it.
   */
  stack?: "sticky" | "overlay"
  /** Extra class for the stack wrapper, such as a background fill. */
  stackClassName?: string
}

/**
 * Homepage section order. Reorder, add, or remove entries here — adjacent
 * `sticky` + `overlay` pairs are wrapped in a scroll stack automatically.
 */
export const homeSections: HomeSectionDefinition[] = [
  {
    key: "hero",
    render: ({ dictionary }) => (
      <HeroSection
        copy={dictionary.home.hero}
        tagline={dictionary.common.tagline}
      />
    ),
  },
  {
    key: "goal",
    stack: "sticky",
    render: ({ dictionary, locale }) => (
      <GoalSection copy={dictionary.home.goal} locale={locale} />
    ),
  },
  {
    key: "purpose",
    stack: "overlay",
    render: ({ dictionary }) => (
      <PurposeSection copy={dictionary.home.purpose} />
    ),
  },
  {
    key: "ways",
    render: ({ dictionary }) => <WaysSection copy={dictionary.home.ways} />,
  },
  {
    key: "statement",
    render: ({ dictionary }) => (
      <StatementSection copy={dictionary.home.statement} />
    ),
  },
  {
    key: "options",
    render: ({ dictionary }) => (
      <OptionsSection copy={dictionary.home.options} />
    ),
  },
  {
    key: "plantation",
    render: ({ dictionary }) => (
      <PlantationSection copy={dictionary.home.plantation} />
    ),
  },
  {
    key: "marquee",
    stack: "sticky",
    stackClassName: "scroll-stack-marquee",
    render: ({ dictionary }) => (
      <MarqueeSection copy={dictionary.home.marquee} />
    ),
  },
  {
    key: "values",
    stack: "overlay",
    render: ({ dictionary }) => <ValuesSection copy={dictionary.home.values} />,
  },
  {
    key: "faq",
    stack: "sticky",
    render: ({ dictionary }) => <FaqSection copy={dictionary.home.faq} />,
  },
  {
    key: "contact",
    stack: "overlay",
    render: ({ dictionary }) => (
      <ContactSection copy={dictionary.home.contact} />
    ),
  },
]

function groupSections(sections: HomeSectionDefinition[]) {
  const groups: HomeSectionDefinition[][] = []

  for (const section of sections) {
    const currentGroup = groups.at(-1)

    if (
      currentGroup?.length === 1 &&
      currentGroup[0].stack === "sticky" &&
      section.stack === "overlay"
    ) {
      currentGroup.push(section)
      continue
    }

    groups.push([section])
  }

  return groups
}

export function HomeSections(props: HomeSectionProps) {
  const groups = groupSections(homeSections)

  return (
    <>
      {groups.map((group) => {
        if (group.length === 1) {
          const [section] = group

          return <Fragment key={section.key}>{section.render(props)}</Fragment>
        }

        return (
          <ScrollStack className={group[0].stackClassName} key={group[0].key}>
            {group.map((section) => (
              <Fragment key={section.key}>{section.render(props)}</Fragment>
            ))}
          </ScrollStack>
        )
      })}
    </>
  )
}
