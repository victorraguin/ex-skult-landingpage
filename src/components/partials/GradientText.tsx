import React from 'react';

export const GradientText = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
}) => (
  <span
    {...rest}
    className={`bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-transparent ${rest.className}`}
  >
    {children}
  </span>
);
