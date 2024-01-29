import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bordered?: boolean
  filled?: boolean
}

export const Footer = ({
  children,
  bordered = false,
  filled = false,
}: Props) => {
  return (
    <footer
      className={classNames({
        ['border-t border-gray-300']: bordered,
        ['rounded-b-md bg-gray-200 dark:bg-gray-700']: filled,
      })}
    >
      {children}
    </footer>
  )
}
