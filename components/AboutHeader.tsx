import React from "react";

interface AboutHeaderProps {}

export const AboutHeader: React.FC<AboutHeaderProps> = ({}) => {
  return (
    <div className="w-full">
      <h2 className="flex items-center text-2xl heading">About Me</h2>
      {/* <div className="w-14 h-px bg-darkliver"></div> */}
      {/* <div className="h-px bg-darkliver w-full inline-block" /> */}
    </div>
  );
};
