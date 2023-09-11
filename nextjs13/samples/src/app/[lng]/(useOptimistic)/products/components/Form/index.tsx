'use client'

import { useRef } from 'react'
import { savePost } from '../../server/actions/savePost'
import { Button } from '../Button'
import { experimental_useOptimistic as useOptimistic } from 'react'

export type Product = {
  id: number
  title: string
  description: string
}

type FormProps = {
  products: Product[]
}

export function Form({ products }: FormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [optimisticProducts, addOptimisticProducts] = useOptimistic(
    products,
    (state, newPost: Product) => {
      return [...state, newPost]
    }
  )

  const handleSave = async (formData: FormData) => {
    formRef.current?.reset()
    addOptimisticProducts({
      id: Date.now(),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    })
    await savePost(formData)
  }

  return (
    <>
      <form ref={formRef} action={handleSave}>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <Button />
      </form>
      <ul>
        {optimisticProducts.map((row) => (
          <li key={row.id}>{row.title}</li>
        ))}
      </ul>
    </>
  )
}
