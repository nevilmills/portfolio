import React from "react";

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div className="w-full">
      <h2 className="flex items-center text-2xl heading">{text}</h2>
    </div>
  );
};
