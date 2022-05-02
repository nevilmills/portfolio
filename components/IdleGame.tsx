import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface IdleGameProps {}

export const IdleGame: React.FC<IdleGameProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <a
      href="https://github.com/nevilmills/Comp351FinalProject"
      target="_blank"
      className="block"
      data-aos="fade-left"
    >
      <div className="flex w-[1000px] h-[250px] project-entry">
        <div className="w-[200px] h-full p-4 flex flex-col justify-center">
          <div className="w-[180px] h-[180px] relative rounded-2xl overflow-hidden">
            <Image
              src="/browserGame.png"
              alt="Gameplay of Dodge the Bullets"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center grow">
          <h3 className="text-2xl subheading">Idle Game</h3>
          <div className="max-w-2xl mt-2">
            <p className="text-lg primaryText">
              A browser-based idle game where players can train a range of
              skills.
            </p>
          </div>
          <div className="mt-4">
            <ul className="flex space-x-5 text-lighterGrey">
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>TypeORM</li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};
