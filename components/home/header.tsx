"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { UNDERLINE_PATH } from "./underline-link"

export function Header({
  labels,
}: {
  labels: {
    purpose: string
    takePart: string
    plantations: string
    questions: string
  }
}) {
  const links = [
    { label: labels.purpose, href: "#purpose" },
    { label: labels.takePart, href: "#take-part" },
    { label: labels.plantations, href: "#plantations" },
    { label: labels.questions, href: "#questions" },
  ]
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen)
    return () => document.body.classList.remove("menu-open")
  }, [menuOpen])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <nav aria-label="Primary navigation" className="desktop-nav">
            {links.map((link) => (
              <a className="nav-link" href={link.href} key={link.href}>
                <span className="nav-link-label">{link.label}</span>
                <svg
                  aria-hidden="true"
                  className="nav-link-stroke"
                  preserveAspectRatio="none"
                  viewBox="0 0 310 40"
                >
                  <path
                    className="nav-link-path"
                    d={UNDERLINE_PATH}
                    fill="none"
                    pathLength={100}
                    stroke="currentColor"
                    strokeDasharray={100}
                    strokeLinecap="round"
                    strokeWidth={10}
                  />
                </svg>
              </a>
            ))}
          </nav>
          <Link aria-label="Konpal home" className="wordmark" href="#top">
            <Image
              alt="Konpal"
              className="logo-mark logo-mark-dark"
              height={46}
              src="/konpal-logo.png"
              width={196}
            />
            <Image
              alt=""
              aria-hidden="true"
              className="logo-mark logo-mark-light"
              height={46}
              src="/konpal-logo-white.png"
              width={196}
            />
          </Link>
          <a className="header-action" href="mailto:konpal.earth@gmail.com">
            Plant with us <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <nav
        aria-hidden={!menuOpen}
        className={`mobile-navigation${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        inert={!menuOpen}
      >
        <div className="mobile-navigation-links">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
              <ArrowUpRight aria-hidden="true" size={20} />
            </a>
          ))}
          <a
            className="mobile-contact"
            href="mailto:konpal.earth@gmail.com"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>
      </nav>
    </>
  )
}
