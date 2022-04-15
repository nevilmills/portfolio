import React from "react";

interface TabProps {
  text: string;
  active: boolean;
  toggleActive: () => void;
  pos?: "first" | "last";
}

export const Tab: React.FC<TabProps> = ({
  text,
  active,
  pos,
  toggleActive,
}) => {
  const bgColour = active ? "is-active" : null;
  const classList =
    pos === "first"
      ? `tab rounded-l border-r-0 ${bgColour}`
      : `tab rounded-r border-l-0 ${bgColour}`;

  return (
    <button
      className={classList}
      onClick={() => {
        toggleActive();
      }}
    >
      {text}
    </button>
  );
};
