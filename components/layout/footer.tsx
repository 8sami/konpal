import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { contactEmail } from "@/lib/site"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <a aria-label="Konpal home" className="footer-wordmark" href="#top">
            <Image
              alt="Konpal"
              className="logo-mark logo-mark-light"
              height={60}
              src="/konpal-logo-white.png"
              width={256}
            />
          </a>
          <p>green today, greener tomorrow</p>
        </div>
        <div className="footer-bottom">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/konpal.earth/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/konpal/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
          <span>© {new Date().getFullYear()} Konpal</span>
        </div>
      </div>
    </footer>
  )
}
