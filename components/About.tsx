import React from "react";
import { AboutHeader } from "./AboutHeader";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex flex-col items-center py-28">
      <div className="">
        <AboutHeader />
      </div>
    </section>
  );
};
