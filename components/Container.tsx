import React from "react";

export default function Container({
  children,
  className,
  id,
  full,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  id?: string;
  full?: boolean;
}>) {
  return (
    <section
      id={id}
      className={`  ${
        full
          ? "xl:container xl:mx-auto xl:max-xl:px-6"
          : "container mx-auto max-xl:px-6 "
      }   ${className}`}
    >
      {children}
    </section>
  );
}
