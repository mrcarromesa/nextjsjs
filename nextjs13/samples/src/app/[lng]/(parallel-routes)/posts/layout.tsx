import { ReactNode } from 'react'

export default function layout({
  children,
  todo,
}: {
  children: ReactNode
  todo: ReactNode
}) {
  return (
    <section>
      <h1>OI...</h1>
      --
      <section>{todo}</section>
      --
      <section>{children}</section>
    </section>
  )
}
