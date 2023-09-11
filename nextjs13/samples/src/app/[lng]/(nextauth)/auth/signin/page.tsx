import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { ButtonLogin } from './components/ButtonLogin'
import { authOptions } from '@/app/(nextauth)/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { FormCredentials } from './components/FormCredentials'

export default async function SignIn() {
  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/auth/profile')
  }

  console.log('providers', providers?.credentials)

  return (
    <section>
      <FormCredentials />
      <ButtonLogin provider={providers?.google} />
    </section>
  )
}
