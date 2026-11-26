import { contactEmail } from "@/lib/site"

export function participationLink(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
}
