import React from "react";

export const NavElement: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="inline-block text-offwhite font-lato">
      <a className="p-2 underlineTarget" href="/">
        {children}
      </a>
      <div className="underline bg-offwhite" />
    </div>
  );
};
