import { notFound } from "next/navigation"

import { HomePage } from "@/components/home/homepage"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale)

  return <HomePage dictionary={dictionary} locale={locale} />
}
