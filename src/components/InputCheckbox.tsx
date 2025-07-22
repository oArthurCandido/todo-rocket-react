import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCheckboxIconVariants, inputCheckboxVariants, inputCheckboxWrapperVariants } from "./variants";
import { Icon } from "./Icon";
import { CheckIcon } from "../assets/icons";
import Skeleton from "./Skeleton";

interface InputCheckboxProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants>,
    VariantProps<typeof inputCheckboxIconVariants>, VariantProps<typeof inputCheckboxWrapperVariants> {
      loading?: boolean
    }

const InputCheckbox = ({
  className,
  variant,
  size,
  disabled,
  loading,
  ...props
}: InputCheckboxProps) => {

  if(loading){
    return <Skeleton className={inputCheckboxVariants({size, variant: "none"})} />
  }
  return (
    <label className={inputCheckboxWrapperVariants({className})}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled, variant })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
};

export { InputCheckbox };
