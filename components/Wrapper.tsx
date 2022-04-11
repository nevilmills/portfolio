import React from "react";

export const Wrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-timberwolf">
      <div className="w-screen h-screen">{children}</div>
    </div>
  );
};
