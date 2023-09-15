'use client'

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FormEvent, useState } from 'react'

export const FormCredentials = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        username,
        password,
        callbackUrl: `/auth/profile`,
      })

      console.log('res', res)
      return redirect(res?.url as string)
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  )
}
