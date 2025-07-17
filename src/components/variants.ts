import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "px-2 py-0.5",
        md: "px-4 py-1",
        lg: "text-base px-8 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
      default: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const buttonVariants = cva(
  "rounded-lg transition flex items-center cursor-pointer gap-2 group",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
        primary: "bg-gray-200 hover:bg-pink-light",
        secondary: "bg-pink-light hover:bg-pink-dark",
      },
      size: {
        sm: "px-2 py-0.5",
        md: "px-4 py-1 h-14",
        lg: "text-base px-8 py-2",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonIconVariants = cva("transition", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    variant: {
      default: "fill-gray-400",
      primary: "fill-pink-base",
      secondary: "fill-pink-dark",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
      secondary: "text-pink-dark group-hover:text-white",
      default: "text-gray-400",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-pink-base hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-gray-200",
        default: "bg-gray-200 hover:bg-gray-300",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
        md: "w-10 h-10 p-1 rounded",
        lg: "w-12 h-12 p-2 rounded",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const iconButtonIconVariants = cva("transition", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    variant: {
      primary: "fill-white",
      secondary: "fill-white",
      tertiary: "fill-gray-400",
      default: "fill-gray-400",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export const inputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);
