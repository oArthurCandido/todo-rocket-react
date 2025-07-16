import React from 'react'
import { Icon } from './Icon'
import { type VariantProps } from 'class-variance-authority'
import { iconButtonVariants, iconButtonIconVariants } from './variants'

interface ButtonIconProps
        extends Omit<React.ComponentProps<'button'>, "size" | "disabled">, VariantProps<typeof iconButtonVariants>, VariantProps<typeof iconButtonIconVariants >{
            icon: React.ComponentProps<typeof Icon>['svg']
        }

const ButtonIcon = ({
    variant,
    size,
    disabled,
    className,
    icon: IconComponent,
    ...props
}: ButtonIconProps) => {
  return (
    <button className={iconButtonVariants({variant, size, disabled, className})} {...props}>
        <Icon className={iconButtonIconVariants({size, variant})} svg={IconComponent}  />
    </button>
  )
}

export {ButtonIcon}