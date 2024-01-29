import { MutableRefObject, useEffect } from 'react'

type UseClickOutsideProps = {
  component: MutableRefObject<HTMLElement | null>
  callback: () => void
}

export const useClickOutside = ({
  component,
  callback,
}: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        component.current &&
        !component.current.contains(event.target as HTMLElement)
      ) {
        callback()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [component, callback])
}
