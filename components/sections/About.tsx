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
              Hello! My name is Nevil and I enjoy building web applications. I'm
              a recent graduate from the University of the Fraser Valley
              currently looking for a team of developers to join.
            </p>
            <p>
              My Interest in web development was sparked while taking an
              advanced web development course in University, where I built a
              browser game with vanilla JavaScript. Following this semester, I
              had an urge to try building a web application using a frontend
              library, and so I learned React. Since then, I've continued
              learning more about full stack development by building various web
              apps.
            </p>
            <p>
              Outside of development, I'm passionate about health and fitness,
              and love music and movies. Some of my other hobbies are playing
              squash, snowboarding, and video games.
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
