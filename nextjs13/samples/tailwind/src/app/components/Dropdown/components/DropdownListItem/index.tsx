import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DropdownListItem = ({ children }: Props) => {
  return (
    <li className="px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
      {children}
    </li>
  )
}
