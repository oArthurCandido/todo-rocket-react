import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCheckboxIconVariants, inputCheckboxVariants, inputCheckboxWrapperVariants } from "./variants";
import { Icon } from "./Icon";
import { CheckIcon } from "../assets/icons";

interface InputCheckboxProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants>,
    VariantProps<typeof inputCheckboxIconVariants>, VariantProps<typeof inputCheckboxWrapperVariants> {}

const InputCheckbox = ({
  className,
  size,
  disabled,
  ...props
}: InputCheckboxProps) => {
  return (
    <label className={inputCheckboxWrapperVariants({className})}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
};

export { InputCheckbox };
