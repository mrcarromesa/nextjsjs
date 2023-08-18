import { translatePath } from "../middlewares/translate";
import { chain } from "../middlewares/chain";
import { checkLogged } from "../middlewares/login";



// function checkLogged(request: NextRequest) {

//   const token = request.cookies.get('@store-token')?.value
  
//   const signInURL = new URL('/', request.url);

//   if (!token && request.nextUrl.pathname !== '/') {
//     return NextResponse.redirect(signInURL)
//   }
  
//   const dashboardURL = new URL('/dashboard', request.url);

//   if (token && request.nextUrl.pathname === '/') {
//     return NextResponse.redirect(dashboardURL)
//   }

//   return NextResponse.next()
// }

export default chain([checkLogged, translatePath])

// export default function middleware(request: NextRequest) {
  
//   app.use(request);

//   // // console.log('md...');

//   // app.middleware(checkLogged);
//   app.middleware(checkLogged);
//   app.middleware(translatePath);

//   // const result = translatePath(request)
//   // if (result) {
//   //   return result;
//   // }

//   // return app.res?.() || NextResponse.next()
// }

// export const config = {
//   matcher: ['/', '/dashboard/:path*']
// }

export const config = {
  // matcher: ['/', '/en', '/dashboard', '/en/dashboard']
  matcher: ['\/((?!api|_next\/static|_next\/image|favicon.ico).*)', '/']
}