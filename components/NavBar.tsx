import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { NavElement } from "./NavElement";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
      <div className="pl-4 space-x-4">
        <a href="https://github.com/nevilmills" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nevil-mills-4655021a1/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
      <div className="mr-8 space-x-6">
        <NavElement href="/#about">About</NavElement>
        <NavElement href="/#experience">Experience</NavElement>
        <NavElement href="/#projects">Projects</NavElement>
        <div className="btn btn-darkliver inline-block">
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
