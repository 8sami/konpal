import { Nunito } from "next/font/google"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { hasLocale, localeDirections, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    openGraph: {
      type: "website",
      siteName: dictionary.metadata.siteName,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: dictionary.metadata.openGraphImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["/opengraph-image.png"],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(locale)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      dir={localeDirections[locale]}
      suppressHydrationWarning
      className={cn("antialiased", nunito.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
