import React, { SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";



const buttonStyle = cva(
  [
    "leading-none",
    "flex",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "rounded-lg",
    "ring-primary-300",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "shadow-sm",
          "bg-btn-primary",
          "text-btn-primary-foreground",
          "hover:bg-btn-primary/90",
          "disabled:bg-btn-disabled",
          "disabled:border-btn-disabled",
          "disabled:text-btn-disabled-foreground",
        ],
        secondary: [
          "shadow-sm",
          "bg-btn-secondary",
          "text-btn-secondary-foreground",
          "hover:bg-btn-secondary/80",
          "disabled:border-btn-disabled",
          "disabled:text-btn-disabled-foreground",
        ],
        danger: [
          "shadow-sm",
          "bg-btn-danger",
          "text-btn-danger-foreground",
          "hover:bg-btn-danger/90",
          "disabled:bg-btn-disabled",
          "disabled:border-btn-disabled",
          "disabled:text-btn-disabled-foreground",
        ],
        outline: [
          "shadow-sm",
          "border",
          "border-input",
          "bg-transparent",
          "hover:bg-accent",
          "hover:text-btn-accent-foreground",
        ],
        ghost: [
          "bg-primary-base",
          "text-primary-600",
          "hover:bg-primary-50",
          "active:bg-primary-100",
          "disabled:bg-primary-base",
          "disabled:border-primary-200",
          "disabled:text-primary-400",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "font-medium ",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", class: "h-10 w-10" },
      { btnType: "icon", size: "md", class: "h-11 w-11" },
      { btnType: "icon", size: "lg", class: "h-12 w-12" },
      { btnType: "icon", size: "xl", class: "h-[52px] w-[52px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  asChild?: boolean;
  loading?: boolean; // Added loading prop
  children?: React.ReactNode | React.ReactElement<SVGProps<SVGSVGElement>> | any | Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Conditionally render the loading spinner
    const loadingSpinner = loading && (
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
        className="mr-2 h-4 w-4 animate-spin"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );

    return (
      <Comp
        className={twMerge(clsx(buttonStyle({ variant, size, className })))}
        ref={ref}
        {...props}
      >
        {loadingSpinner}
        {props.children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyle };
