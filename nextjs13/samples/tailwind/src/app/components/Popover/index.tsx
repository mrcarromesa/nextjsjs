import { useCanRenderPortal } from '@/app/hooks/useCanRenderPortal'
import classNames from 'classnames'
import {
  CSSProperties,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

export type PopoverElement = {
  open: (e: React.MouseEvent) => void
}

const arrowDirection = {
  toTop: 'left-1/2 -translate-x-1/2 -translate-y-full',
  toRight: 'rotate-90 translate-x-3/4 right-0 top-1/2 -translate-y-1/2',
  toBottom: 'rotate-180 bottom-0 left-1/2 -translate-x-1/2 translate-y-full',
  toLeft: '-rotate-90 -translate-x-3/4 left-0 top-1/2 -translate-y-1/2',
} as const

const arrowDirectionCombine = {
  top: 'toBottom',
  right: 'toLeft',
  bottom: 'toTop',
  left: 'toRight',
} as const

type Props = {
  title: ReactNode
  body: ReactNode
  popoverPosition?: 'top' | 'right' | 'bottom' | 'left'
}

const CONTAINER_ID = '__-popover-container'

export const Popover = forwardRef<PopoverElement, Props>(
  ({ title, body, popoverPosition = 'top' }, ref) => {
    const [position, setPosition] = useState<CSSProperties>({} as CSSProperties)
    const { canRender } = useCanRenderPortal({ containerId: CONTAINER_ID })

    const styleArrowDirection =
      arrowDirection[arrowDirectionCombine[popoverPosition]]

    console.log('styleArrowDirection', styleArrowDirection)

    const handleOpen = (e: React.MouseEvent) => {
      console.log('e', e)
      if (Object.keys(position).length > 0) {
        setPosition({})
        return
      }

      const { top, right, bottom, left, width } = (
        e.target as HTMLElement
      ).getBoundingClientRect()

      const middleHorizontalPoint = width / 2 + left

      const { scrollY } = window

      if (popoverPosition === 'top') {
        setPosition({
          top: `${top + scrollY}px`,
          left: `${middleHorizontalPoint}px`,
          transform: 'translate(-50%, -110%)',
        })
      }

      if (popoverPosition === 'right') {
        setPosition({
          top: `${top + scrollY}px`,
          left: `${right}px`,
          transform: 'translate(10%, -25%)',
        })
      }

      if (popoverPosition === 'bottom') {
        setPosition({
          top: `${bottom + scrollY}px`,
          left: `${middleHorizontalPoint}px`,
          transform: 'translate(-50%, 10%)',
        })
      }

      if (popoverPosition === 'left') {
        setPosition({
          top: `${top + scrollY}px`,
          left: `${left}px`,
          transform: 'translate(-110%, -25%)',
        })
      }
    }

    useImperativeHandle(ref, () => {
      return {
        open: handleOpen,
      }
    })

    return (
      <>
        {canRender &&
          createPortal(
            <>
              {Object.keys(position).length > 0 && (
                <div
                  className={classNames(
                    'absolute z-50 flex h-auto max-w-xs flex-col rounded-sm border-x border-y border-gray-300'
                  )}
                  style={position}
                >
                  <div
                    className={classNames(
                      'absolute h-0  w-0  border-x-8 border-b-[8px] border-x-transparent border-b-gray-300',
                      styleArrowDirection
                    )}
                  ></div>
                  <h3
                    className={classNames(
                      'w-full rounded-t-sm bg-gray-400 px-4 py-2 text-base'
                    )}
                  >
                    {title}
                  </h3>
                  <div
                    className={classNames(
                      'flex-1 rounded-b-sm bg-white px-4 py-2 dark:bg-gray-600'
                    )}
                  >
                    {body}
                  </div>
                  <div></div>
                </div>
              )}
            </>,
            document.getElementById(CONTAINER_ID) as HTMLDivElement
          )}
      </>
    )
  }
)

Popover.displayName = 'Popover'
