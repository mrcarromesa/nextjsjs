import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'
import { authOptions } from './options'

// access: http://localhost:3000/api/auth/signin

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST }
