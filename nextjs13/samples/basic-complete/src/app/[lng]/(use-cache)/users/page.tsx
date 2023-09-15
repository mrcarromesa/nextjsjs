// 'use client'
import { Suspense } from 'react'
import { List } from '../components/UserList'

export default function User() {
  return (
    <section>
      {/* cache and use not working with suspense yet */}
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </section>
  )
}
