// components/Input.tsx

import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";

const textareaStyle = cva(["border-2", "rounded", "p-2", "rounded-lg"], {
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

export interface TextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyle> {}

const Textarea: React.FC<TextareaProps> = ({ className, variant, ...props }) => (
    <textarea
    type="text"
    className={twMerge(clsx(textareaStyle({ variant, className }), className))}
    {...props}
  />
);

Textarea.displayName = "Textarea";

export { Textarea };
