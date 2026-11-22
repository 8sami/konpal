"use client"

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react"

const VIEW_W = 1600
const VIEW_H = 520
const CENTER_Y = VIEW_H / 2
const SPEED = 120
const FONT_SIZE = 61
const FONT_WEIGHT = 800
const LETTER_SPACING = 3
const RIBBON_WIDTH = 115
const WAVE_AMPLITUDE = 198
const WAVE_STEP = 427
const WAVE_HALF = 213
const PATH_D = `M -${WAVE_STEP} ${CENTER_Y} Q -${WAVE_HALF} ${CENTER_Y - WAVE_AMPLITUDE} 0 ${CENTER_Y} T ${WAVE_STEP} ${CENTER_Y} T ${WAVE_STEP * 2} ${CENTER_Y} T ${WAVE_STEP * 3} ${CENTER_Y} T ${WAVE_STEP * 4} ${CENTER_Y} T ${VIEW_W + WAVE_STEP} ${CENTER_Y}`

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function wrap(value: number, length: number) {
  return ((value % length) + length) % length
}

export function TextLoop({
  text,
  separator = "✦",
}: {
  text: string
  separator?: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const measureRef = useRef<SVGTextElement>(null)
  const headRef = useRef<SVGTextPathElement>(null)
  const tailRef = useRef<SVGTextPathElement>(null)

  const [cycleLength, setCycleLength] = useState(0)
  const [repetitions, setRepetitions] = useState(1)

  const rawId = useId()
  const pathId = `text-loop-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`

  const unit = `${String(text)}\u00A0${separator}\u00A0`
  const textStyle = {
    fontSize: `${FONT_SIZE}px`,
    fontWeight: FONT_WEIGHT,
    letterSpacing: `${LETTER_SPACING}px`,
  }

  useIsomorphicLayoutEffect(() => {
    const path = pathRef.current
    const measure = measureRef.current
    if (!path || !measure) return

    let cancelled = false

    const measurePath = () => {
      if (cancelled) return

      try {
        const totalLength = path.getTotalLength()
        const unitWidth = measure.getComputedTextLength()
        if (!totalLength || !unitWidth) return

        const nextRepetitions = Math.max(
          2,
          Math.ceil(totalLength / unitWidth) + 1
        )

        setRepetitions(nextRepetitions)
        setCycleLength(unitWidth * nextRepetitions)
      } catch {
        return
      }
    }

    measurePath()
    if (document.fonts?.ready) {
      document.fonts.ready.then(measurePath).catch(() => {})
    }

    return () => {
      cancelled = true
    }
  }, [unit])

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    const head = headRef.current
    const tail = tailRef.current
    if (!root || !head || !tail || !cycleLength) return

    let travel = 0
    let frame = 0
    let previous = 0
    let visible = true
    let reduced = false

    const apply = () => {
      const offset = wrap(travel, cycleLength)
      head.setAttribute("startOffset", String(offset))
      tail.setAttribute("startOffset", String(offset - cycleLength))
    }

    const tick = (now: number) => {
      if (!previous) previous = now
      const delta = Math.min(0.05, (now - previous) / 1000)
      previous = now
      travel += SPEED * delta
      apply()
      frame = window.requestAnimationFrame(tick)
    }

    const start = () => {
      if (frame || !visible || reduced) return
      previous = 0
      frame = window.requestAnimationFrame(tick)
    }

    const stop = () => {
      if (!frame) return
      window.cancelAnimationFrame(frame)
      frame = 0
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    reduced = motionQuery.matches

    const onMotionChange = () => {
      reduced = motionQuery.matches
      if (reduced) {
        stop()
        travel = 0
        apply()
      } else {
        start()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
        else stop()
      },
      { threshold: 0.1 }
    )

    // Pointer entry can only resume the loop; it never pauses it.
    const onPointerEnter = () => {
      visible = true
      start()
    }

    apply()
    start()
    observer.observe(root)
    root.addEventListener("pointerenter", onPointerEnter)
    motionQuery.addEventListener("change", onMotionChange)

    return () => {
      observer.disconnect()
      root.removeEventListener("pointerenter", onPointerEnter)
      stop()
      motionQuery.removeEventListener("change", onMotionChange)
    }
  }, [cycleLength])

  const loopText = unit.repeat(repetitions)
  const textLength = cycleLength || undefined

  return (
    <div className="text-loop" ref={rootRef}>
      <svg
        aria-label={text}
        className="text-loop-svg"
        role="img"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      >
        <text
          aria-hidden="true"
          className="text-loop-measure"
          ref={measureRef}
          style={textStyle}
        >
          {unit}
        </text>
        <g>
          <path
            className="text-loop-ribbon"
            d={PATH_D}
            fill="none"
            id={pathId}
            ref={pathRef}
            strokeLinecap="round"
            strokeWidth={RIBBON_WIDTH}
          />
          <text
            aria-hidden="true"
            className="text-loop-copy"
            dominantBaseline="central"
            lengthAdjust="spacing"
            style={textStyle}
            textLength={textLength}
          >
            <textPath href={`#${pathId}`} ref={headRef} startOffset={0}>
              {loopText}
            </textPath>
          </text>
          <text
            aria-hidden="true"
            className="text-loop-copy"
            dominantBaseline="central"
            lengthAdjust="spacing"
            style={textStyle}
            textLength={textLength}
          >
            <textPath href={`#${pathId}`} ref={tailRef} startOffset="-100%">
              {loopText}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  )
}
