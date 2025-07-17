

import React from 'react'
import { type VariantProps, cx } from 'class-variance-authority'
import { inputTextVariants } from './variants'

interface InputTextProps extends Omit<React.ComponentProps<'input'>, "size" | "disabled">, VariantProps<typeof inputTextVariants> {}

const InputText = ({className, size, disabled, ...props}: InputTextProps) => {
  return (
    <input className={cx(inputTextVariants({size, disabled, className}))} {...props}></input>
  )
}

export default InputText