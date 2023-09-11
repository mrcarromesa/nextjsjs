import { getServerSession } from 'next-auth/next'
import Provider from '../contexts/Provider'
import { authOptions } from '@/app/(nextauth)/api/auth/[...nextauth]/options'
export default async function Layout({ children }: any) {
  const session = await getServerSession(authOptions)

  if (!session) {
    console.log('without session')
  } else {
    console.log('with session')
  }

  return (
    <section>
      <Provider>{children}</Provider>
    </section>
  )
}
