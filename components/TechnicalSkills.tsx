import React from "react";

interface TechnicalSkillsProps {}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({}) => {
  return (
    <div className="flex flex-col items-center max-w-[500px] text-lg font-lato text-darkliver space-y-1">
      <h3 className="text-darkGreen text-2xl mb-2">Technical Skills</h3>
      <div>
        <p>
          Programming Languages: C++, Python, JavaScript, TypeScript, SQL
          (Postgres, MySQL), GraphQL, HTML/CSS
        </p>
        <p>Frameworks: React, Next.js, Node.js, Express</p>
        <p>Developer Tools: Git, Docker, VS Code, Visual Studio, PyCharm</p>
        <p>Libraries: TensorFlow, Keras, Chakra-UI</p>
      </div>
    </div>
  );
};
