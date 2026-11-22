"use client"

import { useEffect, useRef, type CSSProperties } from "react"

// Mouse parallax is intentionally small. Values are in pixels at the screen edge.
const PARALLAX_DEPTH = {
  plant: 6,
  daisy: 12,
  anemone: 10,
  ranunculus: 14,
  leaf: 11,
} as const

const PARALLAX_LERP = 0.08

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value))
}

export function HeroMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rootElement = rootRef.current
    if (!rootElement) return
    const root: HTMLDivElement = rootElement

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")

    let frame = 0
    let visible = true
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    function tick() {
      currentX += (targetX - currentX) * PARALLAX_LERP
      currentY += (targetY - currentY) * PARALLAX_LERP
      root.style.setProperty("--mx", currentX.toFixed(4))
      root.style.setProperty("--my", currentY.toFixed(4))
      frame = window.requestAnimationFrame(tick)
    }

    function start() {
      if (!frame) frame = window.requestAnimationFrame(tick)
    }

    function stop() {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      targetX = 0
      targetY = 0
      currentX = 0
      currentY = 0
      root.style.setProperty("--mx", "0")
      root.style.setProperty("--my", "0")
    }

    function syncState() {
      const shouldPause = document.hidden || !visible || reduceMotion.matches
      root.dataset.paused = String(shouldPause)

      const allowParallax =
        !shouldPause && finePointer.matches && !reduceMotion.matches
      root.dataset.parallax = allowParallax ? "on" : "off"

      if (allowParallax) start()
      else stop()
    }

    function onPointerMove(event: PointerEvent) {
      if (root.dataset.parallax !== "on") return
      const rect = root.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      targetX = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1)
      targetY = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }

    function resetTarget() {
      targetX = 0
      targetY = 0
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        syncState()
      },
      { threshold: 0.01 }
    )

    observer.observe(root)
    document.addEventListener("visibilitychange", syncState)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    root.addEventListener("pointerleave", resetTarget)
    reduceMotion.addEventListener("change", syncState)
    finePointer.addEventListener("change", syncState)
    syncState()

    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", syncState)
      window.removeEventListener("pointermove", onPointerMove)
      root.removeEventListener("pointerleave", resetTarget)
      reduceMotion.removeEventListener("change", syncState)
      finePointer.removeEventListener("change", syncState)
      stop()
    }
  }, [])

  return (
    <div
      className="hero-stage"
      ref={rootRef}
      style={
        {
          "--parallax-plant": `${PARALLAX_DEPTH.plant}px`,
          "--parallax-daisy": `${PARALLAX_DEPTH.daisy}px`,
          "--parallax-anemone": `${PARALLAX_DEPTH.anemone}px`,
          "--parallax-ranunculus": `${PARALLAX_DEPTH.ranunculus}px`,
          "--parallax-leaf": `${PARALLAX_DEPTH.leaf}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
