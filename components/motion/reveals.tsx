"use client"

import { useEffect, useRef } from "react"

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.classList.add("reveal-ready")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible")
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`reveal ${className}`}
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export function RevealWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const words = text.split(" ")

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const target = element
    const wordElements = Array.from(
      target.querySelectorAll<HTMLElement>("[data-word]")
    )
    let frame = 0

    function update() {
      frame = 0
      const rect = target.getBoundingClientRect()
      const start = window.innerHeight * 0.8
      const end = window.innerHeight * 0.35
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end + rect.height))
      )

      wordElements.forEach((word, index) => {
        const amount = Math.max(0, Math.min(1, progress * words.length - index))
        word.style.setProperty("--word-opacity", String(0.28 + amount * 0.72))
      })
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [words.length])

  return (
    <p className="word-reveal" ref={ref}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span data-word="" key={`${word}-${index}`}>
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </p>
  )
}

export function CountUp({
  value,
  locale = "en",
}: {
  value: number
  locale?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const target = element
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 900

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1)
          target.textContent = Math.round(
            value * (1 - (1 - progress) ** 4)
          ).toLocaleString(locale)
          if (progress < 1) requestAnimationFrame(tick)
        }

        target.textContent = "0"
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value, locale])

  return (
    <span className="num" ref={ref}>
      {value.toLocaleString(locale)}
    </span>
  )
}

export function Parallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const target = element
    let frame = 0

    function update() {
      frame = 0
      const rect = target.getBoundingClientRect()
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      target.style.setProperty("--parallax-y", `${(progress - 0.5) * 24}px`)
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="parallax" ref={ref}>
      {children}
    </div>
  )
}
