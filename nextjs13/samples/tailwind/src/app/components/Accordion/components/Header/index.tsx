import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import { useAccordion } from '../../context'
import { CaretDown } from '@phosphor-icons/react'

type Props = {
  className?: HTMLAttributes<HTMLElement>['className']
  children: ReactNode
}

type InternalProps = {
  eventKey: string
  onToggleActive: (eventKey: InternalProps['eventKey']) => void
}
export const Header = (props: Props) => {
  const { children, className, eventKey, onToggleActive } = props as Props &
    InternalProps

  const { active, flush, withIndicator, indicatorPosition } = useAccordion()
  return (
    <header
      className={classNames(
        'flex cursor-pointer items-center gap-4 border-x border-b  border-gray-300 px-5 py-4 transition-colors duration-200 ease-out even:border-t-0 first-of-type:rounded-t-lg first-of-type:border-t last-of-type:rounded-b-lg dark:text-primary-dark-color',
        {
          ['!rounded-none !border-x-0 !border-t-0 border-b last-of-type:border-b-0']:
            flush,

          ['bg-white dark:bg-gray-800']: !active[eventKey] && flush,

          ['!rounded-b-none bg-primary-background text-primary-color dark:bg-primary-dark-background']:
            active[eventKey],

          ['flex-row-reverse']: indicatorPosition === 'start',
        },
        className
      )}
      onClick={() => onToggleActive(eventKey)}
    >
      <div className="flex flex-1">{children}</div>
      {withIndicator && (
        <CaretDown
          size={24}
          className={classNames('transition-transform duration-200', {
            ['rotate-180']: active[eventKey],
          })}
        />
      )}
    </header>
  )
}
