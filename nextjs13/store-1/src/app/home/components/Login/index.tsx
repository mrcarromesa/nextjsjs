'use client'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { getData } from './server'
import { useEffect } from 'react'




export const Login = () => {
  const router = useRouter();
  
  useEffect(() => {
    console.log(window.location)

  }, [])

  const handleLogin = () => {
    setCookie('@store-token', 'abc')
    router.push('/dashboard')
  }

  const getDataC = async () => {
    const data = await getData();
    console.log('data', data);
  }

  return (
    <div>
      <button type="button" onClick={() => handleLogin()}>Login</button>
      <button type="button" onClick={() => getDataC()}>Test</button>
    </div>
  )
}