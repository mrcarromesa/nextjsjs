import {
  // MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
  // useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { Overlay } from '../Overlay'
import classNames from 'classnames'
import { X } from '@phosphor-icons/react'
import { Button } from '../../Button'

export type Props = {
  children: ReactNode
  dismissible?: boolean
  align?: 'top' | 'right' | 'bottom' | 'left'
}

const aligns = {
  top: 'top-0 left-0 right-0 !min-h-[15rem]',
  right: 'top-0 right-0 h-full',
  bottom: 'bottom-0 left-0 right-0 !min-h-[15rem]',
  left: 'top-0 left-0 h-full',
} as const

const animationShowByAlign = {
  top: 'animate-ariseFromTopToBottom',
  right: 'animate-ariseFromRightToLeft',
  bottom: 'animate-ariseFromBottomToTop',
  left: 'animate-ariseFromLeftToRight',
} as const

const animationHideByAlign = {
  top: 'animate-hideFromBottomToTop',
  right: 'animate-hideFromLeftToRight',
  bottom: 'animate-hideFromTopToBottom',
  left: 'animate-hideFromRightToLeft',
} as const

export type OverlayElementProps = {
  open: () => void
  close: () => void
}

const OFF_CANVAS_CONTAINER_ID = '__-offcanvas-container'

export const Root = forwardRef<OverlayElementProps, Props>(
  ({ children, align = 'left', dismissible }, ref) => {
    const [canRenderOffcanvas, setCanRenderOffcanvas] = useState(false)
    const [canShowOffcanvas, setCanShowOffcanvas] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    // const rootRef = useRef<OverlayElementProps | null>(null)
    useEffect(() => {
      if (typeof document === undefined) {
        return
      }

      if (!document.getElementById(OFF_CANVAS_CONTAINER_ID)) {
        const divComponent = document.createElement('div')
        divComponent.id = OFF_CANVAS_CONTAINER_ID
        document.body.appendChild(divComponent)
      }

      setCanRenderOffcanvas(true)
    }, [])

    useEffect(() => {
      if (!isClosing) {
        return
      }

      const time = setTimeout(() => {
        setCanShowOffcanvas(false)
        setIsClosing(false)
        document.body.style.overflowY = 'auto'
      }, 500)

      return () => {
        clearTimeout(time)
      }
    }, [isClosing])

    const handleCloseOffCanvas = () => {
      setIsClosing(true)
    }

    const onOpenOffCanvas = () => {
      console.log('OI...')
      setCanShowOffcanvas(true)
      document.body.style.overflowY = 'hidden'
    }

    useImperativeHandle(ref, () => {
      return {
        close: handleCloseOffCanvas,
        open: onOpenOffCanvas,
      }
    })

    return (
      <>
        {canRenderOffcanvas &&
          createPortal(
            canShowOffcanvas && (
              <Overlay onClick={() => dismissible && handleCloseOffCanvas()}>
                <div
                  className={classNames(
                    'absolute flex min-w-[15rem] flex-col bg-white dark:bg-gray-800',
                    {
                      [`${animationShowByAlign[align]}`]: !isClosing,
                      [`${animationHideByAlign[align]}`]: isClosing,
                    },
                    aligns[align]
                  )}
                >
                  {children}
                  <Button
                    variation="unstyled"
                    onClick={handleCloseOffCanvas}
                    className={classNames('absolute right-0 top-0 p-4')}
                  >
                    <X size={20} />
                  </Button>
                </div>
              </Overlay>
            ),
            document.getElementById(OFF_CANVAS_CONTAINER_ID) as HTMLDivElement
          )}
      </>
    )
  }
)

Root.displayName = 'Offcanvas.Root'
