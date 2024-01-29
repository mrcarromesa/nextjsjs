'use client'
import { List, X } from '@phosphor-icons/react'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'

type Callback = () => void

export const asideNavLinkToggleVisibilityControl = {
  callback: {} as Callback,
  on(callback: Callback) {
    this.callback = callback
  },
  emit() {
    this.callback()
  },
  off() {
    this.callback = {} as Callback
  },
}

type Props = {
  children: ReactNode
}

export function MenuOffCanvas() {
  return (
    <button
      type="button"
      onClick={() => asideNavLinkToggleVisibilityControl.emit()}
    >
      <List size={32} color="white" />
    </button>
  )
}

export function OffCanvas({ children }: Props) {
  const [isOffCanvasOpened, setIsOffCanvasOpened] = useState(false)

  useEffect(() => {
    asideNavLinkToggleVisibilityControl.on(() => setIsOffCanvasOpened(true))
  }, [])

  return (
    <>
      <aside
        className={classNames(
          `transition-transform motion-reduce:transition-none 
          max-lg:fixed 
          max-lg:left-0 
          max-lg:top-0 
          max-lg:z-50 
          max-lg:grid 
          max-lg:h-screen 
          max-lg:w-[45%] 
          max-lg:min-w-max
          max-lg:grid-rows-[4rem_1fr] 
          max-lg:bg-white
          max-lg:px-2
          max-lg:dark:bg-gray-600
          `,
          {
            ['max-lg:translate-x-[-100%] ']: !isOffCanvasOpened,
            ['max-lg:translate-x-0']: isOffCanvasOpened,
          }
        )}
      >
        <header className="mb-2 border-b border-solid max-lg:visible max-lg:relative max-lg:flex max-lg:items-center lg:hidden">
          <h5 className="text-xl font-medium">Browse docs</h5>
          <button
            type="button"
            onClick={() => setIsOffCanvasOpened(false)}
            className="absolute right-3 top-3 max-lg:visible lg:hidden"
          >
            <X size={24} className="text-gray-800 dark:text-white" />
          </button>
        </header>
        <div className="max-lg:h-full max-lg:overflow-auto">{children}</div>
      </aside>
      {isOffCanvasOpened && (
        <div
          role="button"
          onClick={() => setIsOffCanvasOpened(false)}
          className={classNames(
            'max-lg:visible max-lg:fixed max-lg:inset-0 max-lg:bg-gray-700/50 lg:hidden'
          )}
        ></div>
      )}
    </>
  )
}
