import React from "react";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <div className="nav">
      <embed />
      <div className="mr-8 space-x-4">
        <span>About</span>
        <span>Experience</span>
        <span>Projects</span>
        <span className="btn btn-darkliver">Resume</span>
      </div>
    </div>
  );
};
