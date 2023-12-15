// components/Input.tsx

import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";

const spinnerStyle = cva(["animate-spin"], {
  variants: {
    variant: {
      primary: [
        "text-spinner-primary",
      ],

      danger: ["text-spinner-danger"],
    },

    size: {
        sm: ["w-2","h-2"],
        md: ["w-4","h-4"],
        lg: ["w-6","h-6"],
        xl: ["w-8","h-8"],
      }
  },

  
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
    size: "md"
  },
});





export interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof spinnerStyle> {}

const Spinner: React.FC<SpinnerProps> = ({ className, variant,size, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={twMerge(clsx(spinnerStyle({ variant,size, className }), className))}
        {...props} 
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
);

Spinner.displayName = "Spinner";

export { Spinner };
