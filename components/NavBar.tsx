import React from "react";
import { NavElement } from "./NavElement";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <div className="nav">
      <div className="mr-8 space-x-6">
        <NavElement>About</NavElement>
        <NavElement>Experience</NavElement>
        <NavElement>Projects</NavElement>
        <div className="btn btn-darkliver inline-block">
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
