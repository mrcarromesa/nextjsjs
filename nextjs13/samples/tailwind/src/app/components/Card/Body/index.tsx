import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Body = ({ children }: Props) => {
  return <div className="block flex-auto p-4">{children}</div>
}
