import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
}
export const Root = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col rounded-md border-x border-y border-gray-300 bg-white dark:bg-gray-800',
        className
      )}
    >
      {children}
    </div>
  )
}
