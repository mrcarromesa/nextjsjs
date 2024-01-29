import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
}

type ExtraProps = {
  active: string
} & Props
export const Item = (props: Props) => {
  const { children, active } = props as ExtraProps
  const itemSlideRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!itemSlideRef.current || !active) {
      return
    }

    ;(itemSlideRef.current.parentNode as HTMLDivElement).scrollTo({
      left: itemSlideRef.current.offsetLeft,
      behavior: 'smooth',
    })
  }, [active])

  return (
    <div
      ref={itemSlideRef}
      className="relative flex flex-shrink-0 flex-grow-0 basis-full snap-start scroll-p-0 items-center justify-center"
    >
      {children}
    </div>
  )
}
