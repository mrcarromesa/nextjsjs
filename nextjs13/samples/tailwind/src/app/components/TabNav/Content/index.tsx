import { ReactNode } from 'react'
import { useTabNav } from '../context/hooks/useTabNavRoute'

type Props = {
  children: ReactNode
  route: string
}

export const Content = ({ children, route }: Props) => {
  const { currentRoute } = useTabNav()
  const isActive = currentRoute === route
  return isActive ? <div className="w-full">{children}</div> : null
}
