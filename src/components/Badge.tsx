import React from "react";
import { Text } from "./Text";
import { type VariantProps } from 'class-variance-authority';
import { badgeTextVariants, badgeVariants} from './variants';

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants>{}

const Badge = ({variant, size, className, children}: BadgeProps) => {
  return (
  <div className={badgeVariants({variant, size, className})}>
    <Text className={badgeTextVariants({variant})} variant={"body-sm-bold"}>{children}</Text>
  </div>
);
};

export { Badge };
