import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cardVariants } from "./variants";

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Card = ({
  as = "div",
  className,
  size,
  children,
  ...props
}: CardProps) => {
  return React.createElement(
    as,
    { className: cardVariants({ size, className }), ...props },
    children
  );
};

export { Card };
