import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { formatMessage } from "@/i18n/format"
import type { CommonDictionary, FooterDictionary } from "@/i18n/types"
import { contactEmail } from "@/lib/site"

export function Footer({
  common,
  copy,
}: {
  common: CommonDictionary
  copy: FooterDictionary
}) {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <Link
            aria-label={common.homeLabel}
            className="footer-wordmark"
            href="#top"
          >
            <Image
              alt={common.logoAlt}
              className="logo-mark logo-mark-light"
              height={60}
              src="/konpal-logo-white.png"
              width={256}
            />
          </Link>
          <p>{common.tagline}</p>
        </div>
        <div className="footer-bottom">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/konpal.earth/"
              rel="noreferrer"
              target="_blank"
            >
              {copy.instagram} <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/konpal/"
              rel="noreferrer"
              target="_blank"
            >
              {copy.linkedin} <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
          <span>
            {formatMessage(copy.copyright, { year: new Date().getFullYear() })}
          </span>
        </div>
      </div>
    </footer>
  )
}
