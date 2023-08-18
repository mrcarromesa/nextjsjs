'use client'

import { useState } from "react"

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} type="button">Increase {count}</button>
  )
}