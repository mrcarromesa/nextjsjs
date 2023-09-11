'use client'

import { signOut } from 'next-auth/react'

export const ButtonLogout = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      Logout
    </button>
  )
}
