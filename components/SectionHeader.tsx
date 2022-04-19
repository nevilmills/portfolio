import React from "react";

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div>
      <h2 className="flex items-center text-3xl heading">{text}</h2>
    </div>
  );
};
