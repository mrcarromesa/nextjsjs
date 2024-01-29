'use client'
import classNames from 'classnames'
import { ElementType } from 'react'
import Link, { LinkProps } from 'next/link'
import { Input } from './Input'

const buttonVariation = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  success: 'button-success',
  danger: 'button-danger',
  warning: 'button-warning',
  info: 'button-info',
  light: 'button-light',
  dark: 'button-dark',

  primaryOutline: 'button-primary-outline',
  secondaryOutline: 'button-secondary-outline',
  successOutline: 'button-success-outline',
  dangerOutline: 'button-danger-outline',
  warningOutline: 'button-warning-outline',
  infoOutline: 'button-info-outline',
  lightOutline: 'button-light-outline',
  darkOutline: 'button-dark-outline',

  link: 'text-link-color hover:text-link-hover-color',

  unstyled: 'text-black dark:text-white',
} as const

const sizeButton = {
  normal: '',
  large: 'text-xl !p-4',
  small: 'text-sm !p-2',
} as const

type ButtonProps = {
  variation?: keyof typeof buttonVariation
  size?: keyof typeof sizeButton
  disabled?: boolean
  active?: boolean
}

type InputComponentType = {
  asComponent?: 'input'
  type: 'submit' | 'image' | 'button' | 'reset' | 'checkbox' | 'radio'
} & React.AllHTMLAttributes<HTMLInputElement>

type ButtonComponentType = {
  asComponent?: 'button'
} & Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'size'>

type LinkComponentType = {
  asComponent?: typeof Link
} & React.AllHTMLAttributes<HTMLAnchorElement> &
  LinkProps

type AnchorComponentType = {
  asComponent?: 'a'
} & React.AllHTMLAttributes<HTMLAnchorElement>

type Props = ButtonProps &
  (
    | ButtonComponentType
    | LinkComponentType
    | AnchorComponentType
    | InputComponentType
  )

export const Button = ({
  className,
  variation = 'primary',
  size = 'normal',
  disabled = false,
  asComponent = 'button',
  active = false,
  ...props
}: Props) => {
  const ComponentType =
    asComponent === 'input' &&
    (props.type === 'checkbox' || props.type === 'radio')
      ? Input
      : (asComponent as unknown as ElementType)

  return (
    <ComponentType
      disabled={disabled}
      className={classNames(
        buttonVariation[variation],
        'rounded-md px-3 py-2',
        sizeButton[size],
        className,
        { ['active']: active },
        { ['opacity-70']: disabled }
      )}
      {...props}
    />
  )
}
