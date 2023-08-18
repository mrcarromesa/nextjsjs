import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const headersList = headers()
  const referer = headersList.get('referer')

  console.log('referer')
 
  return NextResponse.json({
    text:'ab'
  }, {
    status: 201,
  })
}