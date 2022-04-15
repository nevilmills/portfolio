import React from "react";
import { SectionHeader } from "../SectionHeader";
import me from "../../images/me.jpg";
import Image from "next/image";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex flex-col items-center py-28">
      <div>
        <SectionHeader text="About Me" />
        <div className="flex mt-4">
          <div className="max-w-md space-y-4">
            <p>
              Hi! My name is Nevil and ... My interest in web development was
              ignited through an advanced web development course at university.
              Since then, I've been focusing on learning more about full stack
              development by building various web apps.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="ml-4 w-[225px] h-[300px] relative rounded-md overflow-hidden">
            <Image
              src={me}
              alt="Image of myself"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
