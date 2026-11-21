import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">{dictionary.home.title}</h1>
          <p>{dictionary.home.description}</p>
          <p>{dictionary.home.buttonNote}</p>
          <Button className="mt-2">{dictionary.home.buttonLabel}</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          ({dictionary.home.themeHint} <kbd>d</kbd>{" "}
          {dictionary.home.themeHintSuffix})
        </div>
      </div>
    </div>
  );
}
