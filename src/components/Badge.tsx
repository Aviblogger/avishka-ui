import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const badge = cva(
  [
    "w-fit",
    "leading-none",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "rounded-lg",
    "ring-primary-300",
    "disabled:cursor-not-allowed",
    "shadow-sm"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-badge-primary",
          "text-badge-primary-foreground",
        ],
        secondary: [
          "bg-badge-secondary",
          "text-badge-secondary-foreground",
        ],
        danger: [
          "bg-badge-danger",
          "text-badge-danger-foreground",
        ],
        outline: [
          "bg-badge-primary-base",
          "text-badge-primary-600",
          "border-2",
          "border-badge-primary-600",
          "hover:bg-badge-primary-100",
          "active:bg-badge-primary-200",
          "disabled:bg-badge-primary-base",
          "disabled:border-badge-primary-200",
          "disabled:text-badge-primary-400",
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

      btnType: {
        badge: "px-2.5 py-0.5 text-xs font-medium ",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
      btnType: "badge",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  btnType,
  ...props
}) => (
  <div
    className={twMerge(clsx(badge({ variant, btnType, className })))}
    {...props}
  />
);
