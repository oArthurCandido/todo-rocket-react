import React, {createElement} from 'react'
import { type VariantProps } from 'class-variance-authority';
import { textVariants } from './variants';

interface TextProps extends VariantProps<typeof textVariants>{
    as?: keyof React.JSX.IntrinsicElements;
    className?: string; 
    children?: React.ReactNode
}

const Text = ({as = "span", className, children, variant, ...props}: TextProps) => {
  return createElement(
    as,
    {
        className: textVariants({variant, className}),
        ...props
    },
    children
  )
}

export {Text}