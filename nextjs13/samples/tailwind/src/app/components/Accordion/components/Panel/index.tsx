'use client'
import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import { useAccordion } from '../../context'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

type InternalProps = {
  eventKey: string
}

export const Panel = (props: Props) => {
  const { children, className, eventKey } = props as Props & InternalProps

  const panelRef = useRef<HTMLDivElement | null>(null)

  const { active, flush } = useAccordion()

  useEffect(() => {
    if (!panelRef.current) {
      return
    }

    panelRef.current.style.maxHeight = active[eventKey]
      ? `${panelRef.current.scrollHeight}px`
      : '0'
  }, [active, eventKey])

  return (
    <div
      ref={panelRef}
      className={classNames(
        'max-h-0 overflow-hidden border-x border-gray-300 px-5 transition-[max-height] duration-200 ease-out',
        {
          ['border-b py-3 last-of-type:rounded-b-lg']: active[eventKey],
          ['!rounded-none !border-x-0 !border-t-0 bg-white last-of-type:border-b-0 dark:bg-gray-800 dark:text-white']:
            flush,
          ['border-b']: flush && active[eventKey],
        },
        className
      )}
    >
      {children}
    </div>
  )
}
