import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Nav = ({ children }: Props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap">{children}</ol>
    </nav>
  )
}
