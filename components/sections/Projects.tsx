import React from "react";
import { DodgeTheBullets } from "../DodgeTheBullets";
import { ImageClassifier } from "../ImageClassifier";
import { SectionHeader } from "../SectionHeader";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section className="flex flex-col items-center py-28">
      <SectionHeader text="Projects" />
      <div className="mt-8 space-y-2">
        <ImageClassifier />
        <DodgeTheBullets />
      </div>
    </section>
  );
};
