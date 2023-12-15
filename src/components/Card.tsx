import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  
    children?: React.ReactNode | any | Element;
  
  
}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={twMerge('p-5 rounded-xl border bg-card text-card-foreground shadow',clsx(className))} {...props} />
);

const CardTitle: React.FC<CardProps> = ({ className, ...props }) => (
  <h5 className={twMerge('font-medium card card-foreground text-xl', clsx(className))} {...props} />
);

CardTitle.displayName = "CardTitle";



const CardSubtitle: React.FC<CardProps> = ({ className, ...props }) => (
    <h5 className={twMerge('mt-1 text-xs card-foreground/95', clsx(className))} {...props} />
  );

  CardSubtitle.displayName = "CardSubtitle";

  

const CardDescription: React.FC<CardProps> = ({ className, ...props }) => (
  <h5 className={twMerge('font-normal card-foreground/90', clsx(className))} {...props} />
);

CardDescription.displayName = "CardDescription";

export { Card, CardTitle, CardDescription,CardSubtitle };
