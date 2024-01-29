import classNames from 'classnames'
import { ReactNode } from 'react'

const positions = {
  top: 'left-1/2 top-0 -translate-x-1/2 after:ml-[-5px] -translate-y-full after:left-1/2 after:top-full after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black dark:after:border-t-white',
  right:
    'right-[-10px] top-1/2 -translate-y-1/2 after:ml-[-10px] after:mt-[-5px] translate-x-full after:left-0 after:top-1/2 after:border-b-transparent after:border-l-transparent after:border-r-black dark:after:border-r-white after:border-t-transparent',
  bottom:
    'left-1/2 bottom-0 -translate-x-1/2 after:ml-[-5px] after:mt-[-10px] translate-y-full after:left-1/2 after:top-0 after:border-b-black dark:after:border-b-white after:border-l-transparent after:border-r-transparent after:border-t-transparent',
  left: 'left-[-10px] top-1/2 -translate-y-1/2 after:mr-[-10px] after:mt-[-5px] -translate-x-full after:right-0 after:top-1/2 after:border-b-transparent after:border-l-black dark:after:border-l-white after:border-r-transparent after:border-t-transparent',
} as const

type Props = {
  children: ReactNode
  text: ReactNode
  position?: keyof typeof positions
}

export const Tooltip = ({ children, text, position = 'top' }: Props) => {
  return (
    <span className="group/tooltip relative cursor-help">
      {children}
      <span
        className={classNames(
          'invisible absolute !z-50 min-w-max rounded-md bg-black p-1 text-center text-white dark:bg-white dark:text-black',
          'after:absolute after:border-[5px]',
          positions[position],
          'group-hover/tooltip:visible'
        )}
      >
        {text}
      </span>
    </span>
  )
}
