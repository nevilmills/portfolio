import React from "react";

export const NavElement: React.FC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return (
    <div className="inline-block text-offwhite font-lato">
      <a className="p-2 underlineTarget" href={href}>
        {children}
      </a>
      <div className="underline bg-offwhite" />
    </div>
  );
};
