import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { contactEmail } from "@/lib/site"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <Link aria-label="Konpal home" className="footer-wordmark" href="#top">
            <Image
              alt="Konpal"
              className="logo-mark logo-mark-light"
              height={60}
              src="/konpal-logo-white.png"
              width={256}
            />
          </Link>
          <p>green today, greener tomorrow</p>
        </div>
        <div className="footer-bottom">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <div className="footer-socials">
            <Link
              href="https://www.instagram.com/konpal.earth/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/konpal/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <span>© {new Date().getFullYear()} Konpal</span>
        </div>
      </div>
    </footer>
  )
}
