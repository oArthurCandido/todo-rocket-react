import React from "react";
import { Text } from "./Text";
import { cx, type VariantProps } from 'class-variance-authority';
import { badgeTextVariants, badgeVariants, badgeSkeletonVariants} from './variants';
import Skeleton from "./Skeleton";

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants>{
  loading?: boolean
}

const Badge = ({variant, size, className, loading, children, ...props}: BadgeProps) => {

  if(loading){
    return <Skeleton rounded={"full"} className={cx(
      badgeVariants({variant: "none"}),
      badgeSkeletonVariants({size}),
      className
    )}/>
  }

  return (
  <div className={badgeVariants({variant, size, className})} {...props}>
    <Text className={badgeTextVariants({variant})} variant={"body-sm-bold"}>{children}</Text>
  </div>
);
};

export { Badge };
