import React from "react";
import { SectionHeader } from "./SectionHeader";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex flex-col items-center py-28">
      <div className="">
        <SectionHeader text="About Me" />
      </div>
    </section>
  );
};
