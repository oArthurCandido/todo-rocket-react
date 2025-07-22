import React from 'react'
import { Icon } from './Icon'
import { type VariantProps } from 'class-variance-authority'
import { iconButtonVariants, iconButtonIconVariants } from './variants'
import Skeleton from './Skeleton';

interface ButtonIconProps
        extends Omit<React.ComponentProps<'button'>, "size" | "disabled">, VariantProps<typeof iconButtonVariants>, VariantProps<typeof iconButtonIconVariants >{
            icon: React.ComponentProps<typeof Icon>['svg'];
            loading?: boolean
        }

const ButtonIcon = ({
    variant,
    size,
    disabled,
    className,
    icon: IconComponent,
    loading,
    ...props
}: ButtonIconProps) => {

  if(loading){
    return <Skeleton rounded={'sm'} className={iconButtonVariants({
      variant: "none",
      size,
      className
    })}/>
  }

  return (
    <button className={iconButtonVariants({variant, size, disabled, className})} {...props}>
        <Icon className={iconButtonIconVariants({size, variant})} svg={IconComponent}  />
    </button>
  )
}

export {ButtonIcon}