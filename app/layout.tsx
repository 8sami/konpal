import { Geist_Mono, Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Konpal | Planting trees for a greener future",
  description:
    "Konpal is a youth-led nonprofit planting trees for a greener and more fruitful future through continuous charity.",
  openGraph: {
    type: "website",
    siteName: "Konpal",
    title: "Konpal | Planting trees for a greener future",
    description:
      "Konpal is a youth-led nonprofit planting trees for a greener and more fruitful future through continuous charity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konpal | Planting trees for a greener future",
    description:
      "Konpal is a youth-led nonprofit planting trees for a greener and more fruitful future through continuous charity.",
  },
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        nunitoSans.variable,
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
