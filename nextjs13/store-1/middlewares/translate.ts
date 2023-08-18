import { NextRequest, NextResponse, NextMiddleware, NextFetchEvent } from "next/server";
import i18n from '../i18n.json'

export function translatePath(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const locale = request.nextUrl.locale || i18n.defaultLocale
    // console.log('locale', request.nextUrl)
    
    const parseURL = new URL(request.nextUrl.pathname, request.url);
    request.nextUrl.href = parseURL.href;
    request.nextUrl.searchParams.set('lang', locale)
    
    // console.log('request.nextUrl', request.nextUrl)

    // return NextResponse.rewrite(request.nextUrl)
    // return NextResponse.rewrite(request.nextUrl)
    return NextResponse.rewrite(request.nextUrl)
    // return middleware(request, event)
  }
}