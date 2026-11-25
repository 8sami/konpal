import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Pins the first section under the site header while the next one scrolls over
 * it. The homepage section registry creates these automatically for adjacent
 * `sticky` + `overlay` sections.
 */
export function ScrollStack({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("scroll-stack", className)}>{children}</div>
}
