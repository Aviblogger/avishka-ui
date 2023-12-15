import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const alert = cva(
  [
    "leading-none",
    "gap-2",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "rounded-lg",
    "ring-alert-primary-300",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-transparent",
          "text-alert-primary-foreground",
          "border",
          "border-alert-primary-foreground",
        ],
    
        danger: [
          "bg-alert-danger/5",
          "text-alert-danger-foreground",
          "border",
          "border-alert-danger-foreground",
        ],
    
       
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      alertType: {
        alert: "",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
      size: "md",
      alertType: "alert",
    },
  },
);



export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alert> {
      children?: React.ReactNode  | any | Element;
    }



const Alert: React.FC<AlertProps> = ({
  className,
  variant,
  size,
  alertType,
  ...props
}) => (
  <div
    className={twMerge(clsx(alert({ variant, size, alertType, className })))}
    {...props}
  />
);

const AlertTitle: React.FC<AlertProps> = ({ className, ...props }) => (
  <h5 className={twMerge('mb-1 font-medium leading-none tracking-tight text-base	',clsx({ className }))} {...props} />
);

AlertTitle.displayName = "AlertTitle";

const AlertDescription: React.FC<AlertProps> = ({ className, ...props }) => (
  <h5 className={twMerge( 'font-normal',clsx({  className }))} {...props} />
);



AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
