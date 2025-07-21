import React from "react";
import { type VariantProps } from "class-variance-authority";
import { containerVariants } from "./variants";

interface ContainerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Container = ({
  as = "section",
  className,
  size,
  children,
  ...props
}: ContainerProps) => {
  return React.createElement(as, {
    className: containerVariants({ size, className }),
    ...props,
  },
  children
);
};

export default Container;
