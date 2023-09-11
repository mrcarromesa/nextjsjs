'use client'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {
  const router = useRouter()

  const handleLogin = () => {
    setCookie('@store-token', 'abc')
    router.push('/dashboard')
  }

  return (
    <div>
      <button type="button" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  )
}
