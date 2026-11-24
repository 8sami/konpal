"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { contactEmail } from "@/components/home/content"
import type {
  CommonDictionary,
  HeaderDictionary,
  HomeDictionary,
} from "@/i18n/types"

import { UNDERLINE_PATH } from "./underline-link"

export function Header({
  common,
  copy,
  navigation,
}: {
  common: CommonDictionary
  copy: HeaderDictionary
  navigation: HomeDictionary["navigation"]
}) {
  const links = [
    { label: navigation.purpose, href: "#purpose" },
    { label: navigation.takePart, href: "#take-part" },
    { label: navigation.plantations, href: "#plantations" },
    { label: navigation.questions, href: "#questions" },
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
        {common.skipToContent}
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <nav aria-label={common.primaryNavigation} className="desktop-nav">
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
          <Link aria-label={common.homeLabel} className="wordmark" href="#top">
            <Image
              alt={common.logoAlt}
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
          <a className="header-action" href={`mailto:${contactEmail}`}>
            {copy.plantWithUs} <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? common.closeNavigation : common.openNavigation
            }
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
            href={`mailto:${contactEmail}`}
            onClick={() => setMenuOpen(false)}
          >
            {common.getInTouch} <ArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>
      </nav>
    </>
  )
}
