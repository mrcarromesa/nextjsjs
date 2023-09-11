import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server'
export function checkLogged(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const token = request.cookies.get('@store-token')?.value
    const signInURL = new URL('/', request.url)

    if (!token && request.nextUrl.pathname.includes('dashboard')) {
      return NextResponse.redirect(signInURL)
    }

    const dashboardURL = new URL('/dashboard', request.url)

    if (token && !request.nextUrl.pathname.includes('/dashboard')) {
      return NextResponse.redirect(dashboardURL)
    }

    return middleware(request, event)
  }
}
