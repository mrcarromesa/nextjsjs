import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: React.AllHTMLAttributes<HTMLElement>['className']
}
export const GroupTab = ({ children, className }: Props) => {
  return (
    <ul
      className={classNames(
        'mb-2 flex w-full flex-wrap border-b border-gray-500',
        className
      )}
    >
      {children}
    </ul>
  )
}
