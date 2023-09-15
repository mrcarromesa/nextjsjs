'use server'

import { revalidatePath } from 'next/cache'

export const savePost = async (formData: FormData) => {
  const data = {
    title: formData.get('title'),
    description: formData.get('description'),
  }
  console.log('data', data)
  await new Promise((res) => setTimeout(res, 2000))
  revalidatePath('./')
}
