import { IHeading } from "../../types";
import clsx from "clsx";
import React from "react";

export const Heading = ({
  as = 1,
  variant = "h1",
  children,
  className,
  isBold,
  ...rest
}: IHeading) => {
  const Component = `h${as}` || "h1";
  return (
    <Component
      className={clsx(
        "leading-[1.4] dark:text-gray-100 text-gray-900",
        isBold ? "font-bold" : "font-normal",
        theme?.[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const theme = {
  h1: "text-4xl",
  h2: "text-2xl",
  h3: "text-lg",
  h4: "text-base",
  h5: "text-sm",
  h6: "text-xs",
};
