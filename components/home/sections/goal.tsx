import { PLANTED_TREES, TREE_GOAL } from "@/components/home/content"
import { CountUp } from "@/components/motion/reveals"
import { formatMessage } from "@/i18n/format"
import type { HomeDictionary } from "@/i18n/types"

export function GoalSection({
  copy,
  locale,
}: {
  copy: HomeDictionary["goal"]
  locale: string
}) {
  return (
    <section
      aria-labelledby="goal-title"
      className="goal-section section-paper"
    >
      <div className="goal-inner container">
        <div className="goal-copy reveal">
          <h2 id="goal-title">
            {formatMessage(copy.title, {
              count: TREE_GOAL.toLocaleString(locale),
            })}
          </h2>
          <p className="lead">{copy.lead}</p>
        </div>
        <div className="goal-figure reveal">
          <p className="goal-number">
            <CountUp locale={locale} value={TREE_GOAL} />
          </p>
          <p className="goal-caption">{copy.caption}</p>
          <div className="progress-note" aria-live="polite">
            {PLANTED_TREES === null ? (
              <p>{copy.progressPending}</p>
            ) : (
              <p>
                {formatMessage(copy.progressPlanted, {
                  count: PLANTED_TREES.toLocaleString(locale),
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
