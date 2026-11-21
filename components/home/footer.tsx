import { ArrowUpRight } from "lucide-react"

import { contactEmail } from "@/components/home/content"

export function FooterContent() {
  return (
    <div className="footer-inner container">
      <div className="footer-top">
        <a aria-label="Konpal home" className="footer-wordmark" href="#top">
          Konpal
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
  )
}
