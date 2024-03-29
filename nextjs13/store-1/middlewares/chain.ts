import { NextResponse } from 'next/server'
import type { NextMiddleware } from 'next/server'

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

export function chain(
  functions: MiddlewareFactory[],
  index = 0
): NextMiddleware {
  const current = functions[index]

  if (current) {
    const next = chain(functions, index + 1)
    const result = current(next)

    // console.log('result', result);

    return result;
  }

  return () => NextResponse.next()
}