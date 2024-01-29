import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bordered?: boolean
  filled?: boolean
}

export const Header = ({
  children,
  bordered = false,
  filled = false,
}: Props) => {
  return (
    <header
      className={classNames({
        ['border-b border-gray-300']: bordered,
        ['rounded-t-md bg-gray-200 dark:bg-gray-700']: filled,
      })}
    >
      {children}
    </header>
  )
}
