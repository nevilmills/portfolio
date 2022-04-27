import Image from "next/image";
import React from "react";

interface DodgeTheBulletsProps {}

export const DodgeTheBullets: React.FC<DodgeTheBulletsProps> = ({}) => {
  return (
    <a
      href="https://github.com/nevilmills/Comp351FinalProject"
      target="_blank"
      className="block"
    >
      <div className="flex w-[1000px] h-[250px] project-entry">
        <div className="w-[200px] h-full  p-4">
          <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/dogPic.png"
              alt="dog"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center grow">
          <h3 className="text-2xl subheading">Dodge The Bullets!</h3>
          <div className="max-w-2xl mt-2">
            <p className="text-lg primaryText">
              An arcade-style browser game where the aim is to survive as long
              as possible while increasingly difficult waves of projectiles are
              fired at your character!
            </p>
          </div>
          <div className="mt-4">
            <ul className="flex space-x-5 text-lighterGrey">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};
