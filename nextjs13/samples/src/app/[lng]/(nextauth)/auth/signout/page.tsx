import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/(nextauth)/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { ButtonLogout } from './components/ButtonLogout'

export default async function SignOut() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin?callbackUrl=/auth/profile')
  }

  return (
    <section>
      <ButtonLogout />
    </section>
  )
}
