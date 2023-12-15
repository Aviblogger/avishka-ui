// components/Input.tsx

import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";

const inputStyle = cva(["border-2", "rounded", "p-2", "rounded-lg"], {
  variants: {
    variant: {
      primary: [
        "bg-input-primary",
        "text-input-primary-foreground",
        "ring-input-primary-foreground",
        "border-input-primary-foreground/50",
        "focus:border-input-primary-foreground",
        "focus:ring-input-primary-foreground",
      ],

      danger:  [
        "bg-input-danger",
        "text-input-danger-foreground",
        "ring-input-danger-foreground",
        "border-input-danger-foreground/50",
        "focus:border-input-danger-foreground",
        "focus:ring-input-danger-foreground",
      ],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyle> {}

const Input: React.FC<InputProps> = ({ className, variant, ...props }) => (
  <input
    type="text"
    className={twMerge(clsx(inputStyle({ variant, className }), className))}
    {...props}
  />
);

Input.displayName = "Input";

export { Input };
