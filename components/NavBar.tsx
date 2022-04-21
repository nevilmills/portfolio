import React, { useEffect } from "react";
import { NavElement } from "./NavElement";

export const NavBar: React.FC<{}> = ({}) => {
  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        document.getElementById("navbar")!.style.top = "-55px";
      } else {
        document.getElementById("navbar")!.style.top = "0px";
      }
    });
  }, []);

  return (
    <div id="navbar" className="nav">
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
