import React from 'react'
import { type VariantProps } from 'class-variance-authority';
import { iconVariants } from './variants';

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>
}

const Icon = ({svg: SvgComponent, animate, className, ...props}: IconProps) => {
  return <SvgComponent className={iconVariants({animate, className})} {...props}/>
}

export {Icon}