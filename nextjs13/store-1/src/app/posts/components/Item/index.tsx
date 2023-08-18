'use client'

import { useEffect } from "react"

export const Item = ({ title, description }: any) => {
  useEffect(() => {
    console.log('window', window.location)
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}