"use client"

import { useLayoutEffect, useRef, useState } from "react"

export function StickyFooter({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useLayoutEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new ResizeObserver(([entry]) => {
      setFooterHeight(
        entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height
      )
    })

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="sticky-footer-shell"
      style={{ "--footer-height": `${footerHeight}px` } as React.CSSProperties}
    >
      <div className="sticky-footer-track">
        <footer className="site-footer" ref={footerRef}>
          {children}
        </footer>
      </div>
    </div>
  )
}
