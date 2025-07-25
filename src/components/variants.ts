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
        none: "",
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
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
      default: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const badgeSkeletonVariants = cva("",{
  variants: {
    size: {
      sm: "h-6 w-6",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    size: "sm"
  }
})

export const buttonVariants = cva(
  "rounded-lg transition flex items-center cursor-pointer gap-2 group",
  {
    variants: {
      variant: {
        none: "",
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
      none: "",
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
      none: "",
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
        none: "",
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
      none: "",
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

// export const iconButtonSkeletonVariants = cva("", {
//   variants: {}
// })

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

export const inputCheckboxWrapperVariants = cva(
  "inline-flex items-center justify-center relative group"
);

export const inputCheckboxVariants = cva(
  "appearance-none peer flex items-center justify-center rounded-[2px] cursor-pointer transition overflow-hidden ",
  {
    variants: {
      variant: {
        default: "border-2 border-solid  border-green-base hover:border-green-dark hover:bg-green-dark checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
        none: ""
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5 rounded-sm",
        lg: "w-8 h-8",
      },
      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      variant: "default"
    },
  }
);

export const inputCheckboxIconVariants = cva(
  "hidden peer-checked:block w-3 h-3 fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition cursor-pointer",
  {
    variants: {
      size: {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const cardVariants = cva(
  "rounded-lg border border-solid border-gray-200 bg-white shadow-sm",
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-lg px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const skeletonVariants = cva("animate-pulse bg-gray-200 pointer-events-none", {
  variants: {
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "lg",
  },
});
