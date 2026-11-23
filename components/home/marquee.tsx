import { TextLoop } from "@/components/home/text-loop"

export function Marquee() {
  return (
    <section aria-label="Konpal tagline" className="marquee-section">
      <TextLoop text="greenToday, greenerTomorrow" />
    </section>
  )
}
