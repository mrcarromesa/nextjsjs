import { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
}

export const Overlay = ({ children, onClick }: Props) => {
  const elementOverLay = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={elementOverLay}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/60"
      onClick={(e) => {
        e.target === elementOverLay.current && onClick?.()
      }}
      aria-modal
      role="dialog"
    >
      {children}
    </div>
  )
}
