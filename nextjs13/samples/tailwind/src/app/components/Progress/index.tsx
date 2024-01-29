import classNames from 'classnames'
import { ReactNode } from 'react'

const progressBarVariationColor = {
  primary: 'bg-primary-background dark:bg-primary-dark-background',
  secondary: 'bg-secondary-background dark:bg-secondary-dark-background',
  success: 'bg-success-background dark:bg-success-dark-background',
  danger: 'bg-danger-background dark:bg-danger-dark-background',
  warning: 'bg-warning-background dark:bg-warning-dark-background',
  info: 'bg-info-background dark:bg-info-dark-background',
  light: 'bg-light-background dark:bg-light-dark-background',
  dark: 'bg-dark-background dark:bg-dark-dark-background',
} as const

type Props = {
  variation?: keyof typeof progressBarVariationColor
  progress: number
  children?: ReactNode
  className?: React.AllHTMLAttributes<HTMLElement>['className']
  striped?: boolean
  animated?: boolean
}

export const Progress = ({
  variation = 'primary',
  progress,
  children,
  className,
  striped = false,
  animated = false,
}: Props) => {
  const beforeStyles = {
    width: `${progress}%`,
  }

  return (
    <div
      className={classNames(
        'relative h-4 w-full overflow-hidden rounded-md bg-gray-500',
        className
      )}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        style={beforeStyles}
        className={classNames(
          'absolute left-0 top-0 flex h-full items-center justify-center',
          progressBarVariationColor[variation],
          {
            ['bg-striped']: striped,
            ['motion-safe:animate-progressBarAnimated']: striped && animated,
          }
        )}
      >
        {children}
      </div>
    </div>
  )
}
