import React, { useEffect } from "react";
import { SectionHeader } from "../SectionHeader";
import me from "../../images/me.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <section id="about" className="flex flex-col items-center py-28">
      <div data-aos="fade-up">
        <SectionHeader text="About Me" />
        <div className="flex mt-10">
          <div className="max-w-xl space-y-4 primaryText antialiased text-lg">
            <p>
              Hi there! My name is Nevil. I'm a recent graduate from the
              University of the Fraser Valley with a deep interest in fullstack
              development.
            </p>
            <p>
              My Interest in web development was sparked while taking an
              advanced web development course in University, where I built a
              browser game with vanilla JavaScript. Following this, I was eager
              expand on what I learned during the course by picking up a
              frontend library. Since then, I've continued my learning by
              building{" "}
              <a className="highlighted" href="/#projects">
                various web apps.
              </a>
            </p>
            {/* {"I'm a highly organized problem solver with a sharp attention to
              detail."} */}
            <p>
              Outside of development, my passions include fitness, snowboarding,
              video games, and watching tv shows & movies.
            </p>
          </div>
          <div className="ml-10 w-[225px] h-[300px] relative rounded-md overflow-hidden drop-shadow-lg">
            <div className="grayscale w-full h-full transition-grayscale duration-300 hover:grayscale-0">
              <Image
                src={me}
                alt="Image of myself"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
