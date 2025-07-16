import React from "react";
import { Icon } from "./Icon";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./variants";
import { type VariantProps } from "class-variance-authority";
import { Text } from "./Text";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

const Button = ({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonVariants({ variant, size, className, disabled })}
    >
      {IconComponent && (
        <Icon svg={IconComponent} className={buttonIconVariants({ variant, size })} />
      )}
      <Text className={buttonTextVariants({ variant, size })}>{children}</Text>
    </button>
  );
};

export { Button };
