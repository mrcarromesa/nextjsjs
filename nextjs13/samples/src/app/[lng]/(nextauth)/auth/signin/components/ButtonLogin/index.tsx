'use client'
import { signIn } from 'next-auth/react'
export const ButtonLogin = ({ provider }: any) => {
  return (
    <button type="button" onClick={() => signIn(provider.id)}>
      {provider.name}
    </button>
  )
}
