import React from "react";
import { DodgeTheBullets } from "../DodgeTheBullets";
import { GithubTab } from "../GithubTab";
import { IdleGame } from "../IdleGame";
import { ImageClassifier } from "../ImageClassifier";
import { SectionHeader } from "../SectionHeader";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section id="projects" className="flex flex-col items-center py-28">
      <SectionHeader text="Projects" />
      <div className="mt-8 space-y-2 flex flex-col items-center">
        <IdleGame />
        <ImageClassifier />
        <DodgeTheBullets />
        <div className="self-end">
          <GithubTab />
        </div>
      </div>
    </section>
  );
};
