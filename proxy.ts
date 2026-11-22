import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { defaultLocale, hasLocale } from "@/i18n/config"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split("/")[1]

  if (hasLocale(firstSegment)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
}
