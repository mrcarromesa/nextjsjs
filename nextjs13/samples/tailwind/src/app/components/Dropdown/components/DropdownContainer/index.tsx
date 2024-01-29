import {
  ReactNode,
  Children,
  ReactElement,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { useDropdown } from '../../context/DropdownContext'
import classNames from 'classnames'
import { DropdownList } from '../DropdownList'

type Props = {
  children: ReactNode
}

export const DropdownContainer = ({ children }: Props) => {
  const { isOpen } = useDropdown()
  const [canAppearDownPosition, setCanAppearDownPosition] = useState(true)
  const [canAppearLeftPosition, setCanAppearLeftPosition] = useState(true)
  const containerButtonRef = useRef<HTMLDivElement | null>(null)
  const containerListItemRef = useRef<HTMLDivElement | null>(null)
  const windowFrameUpdateID = useRef(0)

  const list: ReactElement[] = []
  const restChildren: ReactElement[] = []

  Children.toArray(children).forEach((child) => {
    if ((child as ReactElement).type === DropdownList) {
      list.push(child as ReactElement)
    } else {
      restChildren.push(child as ReactElement)
    }
  })

  const updateDropdownPosition = useCallback(() => {
    const { top: buttonTopPosition, left: buttonLeftPosition } =
      containerButtonRef.current?.getBoundingClientRect() || { top: 0, left: 0 }

    const containerListItemChild =
      containerListItemRef.current?.querySelector(':scope > *')

    const { height: listItemHeight, width: listItemWidth } =
      containerListItemChild?.getBoundingClientRect() || { height: 0, width: 0 }

    const listItemRight = buttonLeftPosition + listItemWidth

    const containerDropdownBottom = buttonTopPosition + listItemHeight

    window.cancelAnimationFrame(windowFrameUpdateID.current)

    setCanAppearDownPosition(
      window.innerHeight - containerDropdownBottom >
        (containerListItemChild as HTMLElement)?.scrollHeight
    )

    setCanAppearLeftPosition(window.innerWidth > listItemRight)

    windowFrameUpdateID.current = window.requestAnimationFrame(
      updateDropdownPosition
    )
  }, [])

  useEffect(() => {
    const dropDownElementExistsAndIsOpen =
      containerButtonRef.current && containerListItemRef.current && isOpen

    if (!dropDownElementExistsAndIsOpen) {
      window.cancelAnimationFrame(windowFrameUpdateID.current)
      return
    }

    updateDropdownPosition()

    return () => {
      window.cancelAnimationFrame(windowFrameUpdateID.current)
    }
  }, [isOpen, updateDropdownPosition])

  return (
    <div className="relative">
      <div
        className={classNames('flex w-full flex-col', {
          ['!flex-col-reverse']: !canAppearDownPosition,
        })}
      >
        <div ref={containerButtonRef}>{restChildren}</div>
        <div
          className={classNames('relative z-10', {
            ['[&_>*]:bottom-0']: !canAppearDownPosition,
            ['[&_>*]:right-0']: !canAppearLeftPosition,
          })}
          ref={containerListItemRef}
        >
          {list}
        </div>
      </div>
    </div>
  )
}
