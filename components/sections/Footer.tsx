import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="p-4 w-full text-center">
      <div className="primaryText">
        Developed by{" "}
        <a className="highlighted" href="">
          Nevil Mills
        </a>
      </div>
    </footer>
  );
};
