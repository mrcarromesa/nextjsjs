'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export const AddButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      Salvar
    </button>
  )
}
