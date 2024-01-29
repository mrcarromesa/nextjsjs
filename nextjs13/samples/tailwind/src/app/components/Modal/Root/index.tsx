'use client'
import {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { Overlay } from '../Overlay'
import classNames from 'classnames'
import { X } from '@phosphor-icons/react'
import { Button } from '../../Button'

type Props = {
  children: ReactNode
  dismissible?: boolean
  showCloseButton?: boolean
  closeButtonClassName?: HTMLAttributes<HTMLButtonElement>['className']
  verticalCentered?: boolean
  size?:
    | 'fullscreen'
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
  onClose?: () => void
}

type Sizes = {
  [key: string]: React.HTMLAttributes<HTMLElement>['className']
}

const sizes: Sizes = {
  fullscreen: '!h-full !max-w-full',
  'extra-small': '!max-w-xs',
  small: '!max-w-[36rem]',
  medium: '!max-w-[48rem]',
  large: '!max-w-[62rem]',
  'extra-large': '!max-w-[87.5rem]',
} as const

export type ModalElement = {
  open: () => void
  close: () => void
}

const MODAL_CONTAINER_ID = '__-modal-areas'

export const Root = forwardRef<ModalElement, Props>(
  (
    {
      children,
      dismissible = false,
      showCloseButton = false,
      closeButtonClassName,
      verticalCentered = false,
      onClose,
      size,
    },
    ref
  ) => {
    const [canRenderModal, setCanRenderModal] = useState(false)
    const [canShowModal, setCanShowModal] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isWarnTryClose, setIsWarnTryClose] = useState(false)

    const sizeParse = size ? sizes[size] : ''

    useEffect(() => {
      if (typeof document === undefined) {
        return
      }

      if (!document.getElementById(MODAL_CONTAINER_ID)) {
        const modalDiv = document.createElement('div')
        modalDiv.id = MODAL_CONTAINER_ID
        document.body.appendChild(modalDiv)
      }
      setCanRenderModal(true)
    }, [])

    useEffect(() => {
      if (!isClosing) {
        return
      }

      const time = setTimeout(() => {
        setCanShowModal(false)
        setIsClosing(false)
        onClose?.()
      }, 500)

      return () => {
        clearTimeout(time)
      }
    }, [isClosing, onClose])

    useEffect(() => {
      if (!isWarnTryClose) {
        return
      }

      const time = setTimeout(() => {
        setIsWarnTryClose(false)
      }, 500)

      return () => {
        clearTimeout(time)
      }
    }, [isWarnTryClose])

    const handleCloseModal = () => {
      setIsClosing(true)
      document.body.style.overflowY = 'auto'
    }

    const tryCloseModal = () => {
      if (dismissible) {
        handleCloseModal()
        return
      }

      setIsWarnTryClose(true)
    }

    const onOpenModal = () => {
      setCanShowModal(true)
      document.body.style.overflowY = 'hidden'
    }

    useImperativeHandle(ref, () => {
      return {
        close: handleCloseModal,
        open: onOpenModal,
      }
    })

    return (
      <>
        {canRenderModal &&
          createPortal(
            canShowModal && (
              <Overlay onClick={() => tryCloseModal()}>
                <div
                  className={classNames(
                    'w-sm relative mx-auto my-7 flex w-full max-w-lg flex-col rounded-lg bg-white transition-transform duration-500 dark:bg-gray-800',
                    {
                      ['top-1/2 -translate-y-1/2']: verticalCentered,
                      ['animate-hideFromBottomToTop']:
                        isClosing && !verticalCentered,
                      ['animate-ariseFromTopToBottom']:
                        !isClosing && !verticalCentered,
                      ['animate-hideFromBottomToTop-centered']:
                        isClosing && verticalCentered,
                      ['animate-ariseFromTopToBottom-centered']:
                        !isClosing && verticalCentered,
                      ['scale-105']: isWarnTryClose,
                      ['!my-0']: size === 'fullscreen',
                    },
                    sizeParse
                  )}
                >
                  {children}
                  {showCloseButton && (
                    <Button
                      variation="unstyled"
                      onClick={handleCloseModal}
                      className={classNames(
                        'absolute right-0 top-0 p-4',
                        closeButtonClassName
                      )}
                    >
                      <X size={20} />
                    </Button>
                  )}
                </div>
              </Overlay>
            ),
            document.getElementById(MODAL_CONTAINER_ID) as HTMLDivElement
          )}
      </>
    )
  }
)

Root.displayName = 'ModalRootComponent'
