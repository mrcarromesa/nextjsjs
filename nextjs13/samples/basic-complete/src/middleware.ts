import { chain } from '../middlewares/chain'
import { checkLogged } from '../middlewares/login'
import { translatePath } from '../middlewares/translate'

export default chain([translatePath, checkLogged])

export const config = {
  // matcher: ['/', '/en', '/dashboard', '/en/dashboard']
  matcher: [
    '/((?!api|internalAPI|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
}
