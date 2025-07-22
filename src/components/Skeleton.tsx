import React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { skeletonVariants } from './variants'

interface SkeletonProps extends React.ComponentProps<'div'>, VariantProps<typeof skeletonVariants>{}

const Skeleton = ({className, rounded, ...props}: SkeletonProps) => {
  return (
    <div className={skeletonVariants({rounded, className})} {...props}/>
  )
}

export default Skeleton