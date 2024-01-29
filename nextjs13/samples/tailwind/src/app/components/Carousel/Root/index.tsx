import {
  ReactElement,
  ReactNode,
  cloneElement,
  Children,
  useRef,
  useMemo,
  useState,
  useEffect,
} from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

type Props = {
  children: ReactNode
  autoPlaying?: boolean
  interval?: number
  showIndicator?: boolean
}
export const Root = ({
  children,
  autoPlaying = false,
  showIndicator = false,
  interval = 2000,
}: Props) => {
  const contentDivRef = useRef<HTMLDivElement | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const components = useMemo(() => {
    const links: ReactElement[] = []
    const elements: ReactElement[] = []

    Children.map(children, (child, index) => {
      const key = index
      links.push(
        <input
          key={key}
          className="cursor-pointer"
          type="radio"
          onChange={(e) => setActiveSlide(Number(e.target.value))}
          checked={activeSlide === key}
          value={key}
        />
      )

      elements.push(
        cloneElement(child as ReactElement, {
          active: activeSlide === key,
          key: `element-${key}`,
        })
      )
    })

    return {
      links,
      elements,
    }
  }, [children, activeSlide])

  useEffect(() => {
    if (!autoPlaying) {
      return
    }

    let time: NodeJS.Timeout

    const pauseTime = () => {
      clearInterval(time)
    }

    const playTime = () => {
      pauseTime()
      time = setInterval(() => {
        setActiveSlide((current) => {
          if (current >= components.elements.length - 1) {
            return 0
          }

          const newCurrent = ++current
          return newCurrent
        })
      }, interval)
    }

    playTime()

    const contentDiv = contentDivRef.current

    contentDiv?.addEventListener('mouseover', pauseTime)
    contentDiv?.addEventListener('mouseout', playTime)

    return () => {
      clearInterval(time)

      contentDiv?.removeEventListener('mouseover', pauseTime)
      contentDiv?.removeEventListener('mouseout', playTime)
    }
  }, [components.elements, interval, autoPlaying])

  return (
    <div ref={contentDivRef} className="relative flex flex-col gap-2">
      <div
        className={classNames(
          'flex flex-1 snap-x snap-mandatory overflow-hidden scroll-smooth whitespace-nowrap shadow-xl',
          styles.carouselContainer
        )}
      >
        {components.elements}
      </div>
      {showIndicator && (
        <div className="flex items-center justify-center gap-2">
          {components.links}
        </div>
      )}
      <button
        type="button"
        className="absolute left-1 top-[50%] flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-full bg-gray-400"
        onClick={() => setActiveSlide((current) => Math.max(current - 1, 0))}
      >
        <CaretLeft size={32} color="white" />
      </button>
      <button
        type="button"
        className="absolute right-1 top-[50%] flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-full bg-gray-400"
        onClick={() =>
          setActiveSlide((current) =>
            Math.min(current + 1, components.elements.length - 1)
          )
        }
      >
        <CaretRight size={32} color="white" />
      </button>
    </div>
  )
}
