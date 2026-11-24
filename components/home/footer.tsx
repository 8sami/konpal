import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { contactEmail } from "@/components/home/content"
import { formatMessage } from "@/i18n/format"
import type { CommonDictionary, FooterDictionary } from "@/i18n/types"

export function FooterContent({
  common,
  copy,
}: {
  common: CommonDictionary
  copy: FooterDictionary
}) {
  return (
    <div className="footer-inner container">
      <div className="footer-top">
        <a
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
        </a>
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
  )
}
