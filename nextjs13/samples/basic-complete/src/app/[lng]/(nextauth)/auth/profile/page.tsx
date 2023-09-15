'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
export default function Profile() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin?callbackUrl=/auth/profile')
    },
  })

  return (
    <section className="flex flex-col gap-6">
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <Image
        src={session?.user?.image || ''}
        width={100}
        height={100}
        alt="avatar"
      />
    </section>
  )
}
