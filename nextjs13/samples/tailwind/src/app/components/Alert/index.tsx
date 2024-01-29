import { X } from '@phosphor-icons/react'
import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'

type AlertDismissible = {
  animated?: boolean
  dismissible?: true
  beforeClose?: () => void
  afterClose?: () => void
  onClose: () => void
}

type AlertUnDismissible = {
  dismissible?: false
}

type Props = {
  children: ReactNode
  variation?:
    | 'alert-primary'
    | 'alert-secondary'
    | 'alert-success'
    | 'alert-danger'
    | 'alert-warning'
    | 'alert-info'
    | 'alert-light'
    | 'alert-dark'
  className?: HTMLAttributes<HTMLDivElement>['className']
} & (AlertDismissible | AlertUnDismissible)

const ALERT_SHOW_HIDE_TIME = 500

export function Alert({
  children,
  variation = 'alert-primary',
  className,
  dismissible = false,
  ...props
}: Props) {
  const alertDismissibleProps = props as Omit<AlertDismissible, 'dismissible'>

  const alertRef = useRef<HTMLDivElement | null>(null)

  const [isClosing, setIsClosing] = useState(false)
  const [isShowing, setIsShowing] = useState(alertDismissibleProps?.animated)

  useEffect(() => {
    if (!isShowing) {
      return
    }

    setIsShowing(false)
  }, [isShowing])

  useEffect(() => {
    if (!isClosing) {
      return
    }

    const time = setTimeout(() => {
      if (dismissible) {
        alertDismissibleProps.onClose()
        alertDismissibleProps.afterClose?.()
      }
    }, ALERT_SHOW_HIDE_TIME)

    return () => {
      clearTimeout(time)
    }
  }, [isClosing, dismissible, alertDismissibleProps])

  const handleClose = () => {
    alertDismissibleProps.beforeClose?.()

    if (alertDismissibleProps.animated) {
      setIsClosing(true)
      return
    }

    alertDismissibleProps.onClose()
    alertDismissibleProps.afterClose?.()
  }

  return (
    <div
      ref={alertRef}
      className={classNames(
        `w-full p-4 ${variation} flex justify-center rounded-md opacity-100 transition duration-500 ease-in-out motion-reduce:transition-none`,
        { ['!opacity-0']: isShowing || isClosing },
        className
      )}
      role="alert"
    >
      <div className="flex-1">{children}</div>
      {dismissible && (
        <button type="button" className="self-start px-2" onClick={handleClose}>
          <X size={24} />
        </button>
      )}
    </div>
  )
}
