'use client'

import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export const Logout = () => {
  const router = useRouter()

  const handleLogout = () => {
    deleteCookie('@store-token')
    router.push('/')
  }

  return (
    <div>
      <button type="button" onClick={() => handleLogout()}>
        Logout Aqui - {process.env.NEXT_PUBLIC_OTHER_ENV} $
      </button>
    </div>
  )
}
