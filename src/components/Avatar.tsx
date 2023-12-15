import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";

// interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
//   src?: string;
//   initials?: string;
// }

function getInitials(input?: string): string {
  if (!input) {
    return ""; // Handle the case when input is undefined
  }

  const words: string[] = input.split(" ");
  const initials: string[] = words.map((word) => word.charAt(0).toUpperCase());
  let result: string = initials.join("");
  result = result.slice(0, 2);
  return result;
}

const avatarStyle = cva(
  [
    "w-12",
    "h-12",
    "rounded-full",
    "overflow-hidden",
    "m-auto",
    "text-center",
    "flex",
    "justify-center",
    "items-center",
    "font-medium",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-avatar-primary", "text-avatar-primary-foreground"],
        secondary: ["bg-badge-secondary", "text-badge-secondary-foreground"],
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
      },
      size: {
        sm: ["w-10","h-10"],
        md: ["w-12","h-12"],
        lg: ["w-16","h-16"],
        xl: ["w-20","h-20"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
      size: "md"
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStyle> {
  src?: string;
  initials?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  variant,
  size,
  initials,
  ...props
}) => {
  const content = src ? (
    <img src={src} alt="User Avatar" className="w-full h-full object-cover" />
  ) : (
    getInitials(initials)
  );

  return (
    <div
      className={twMerge(clsx(avatarStyle({ variant, size, className })))}
      {...props}
    >
      {content}
    </div>
  );
};

Avatar.displayName = "Avatar";

export { Avatar };
