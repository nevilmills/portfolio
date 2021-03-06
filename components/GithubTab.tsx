import Image from "next/image";
import React, { useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

interface GithubTabProps {}

export const GithubTab: React.FC<GithubTabProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <a
      href="https://github.com/nevilmills/"
      target="_blank"
      className="block"
      data-aos="fade-up"
    >
      <div className="flex w-[400px] h-[100px] project-entry">
        <div className="h-full flex items-center justify-center grow">
          <h3 className="text-2xl subheading">Others</h3>
          <div className="ml-4 w-[50px] h-[50px] relative rounded-2xl overflow-hidden">
            <FontAwesomeIcon icon={faGithub} className="icon fa-2xl pt-2" />
          </div>
        </div>
      </div>
    </a>
  );
};
