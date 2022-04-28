import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="p-4 w-full text-center">
      <div className="primaryText">
        Developed by{" "}
        <a
          className="highlighted"
          href="https://www.linkedin.com/in/nevil-mills-4655021a1/"
          target="_blank"
        >
          Nevil Mills
        </a>
      </div>
    </footer>
  );
};
