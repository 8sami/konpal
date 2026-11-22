"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// Hand-drawn underline stroke from VantaUI's Underline Link component.
export const UNDERLINE_PATH =
  "M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999"

export function UnderlineLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode
  href: string
  className?: string
}) {
  const frameRef = useRef(0)
  const [offset, setOffset] = useState(100)

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    },
    []
  )

  const handleEnter = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }

    setOffset(100)

    // Two frames guarantee the hidden state paints before the draw starts.
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = 0
        setOffset(0)
      })
    })
  }

  const handleLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }

    setOffset(-100)
  }

  return (
    <a
      className={className ? `underline-link ${className}` : "underline-link"}
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="underline-link-label">{children}</span>
      <span aria-hidden="true" className="underline-link-stroke">
        <svg
          className="underline-link-svg"
          preserveAspectRatio="none"
          viewBox="0 0 310 40"
        >
          <path
            className="underline-link-path"
            d={UNDERLINE_PATH}
            fill="none"
            pathLength={100}
            stroke="currentColor"
            strokeDasharray={100}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeWidth={10}
          />
        </svg>
      </span>
    </a>
  )
}
