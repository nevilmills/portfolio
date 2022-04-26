import React from "react";

interface TechnicalSkillsProps {}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({}) => {
  // return (
  //   <div className="flex flex-col items-center max-w-[500px] text-lg font-lato primaryText space-y-1">
  //     <h3 className="subheading text-2xl mb-2">Technical Skills</h3>
  //     <div>
  //       <p>
  //         Programming Languages: C++, Python, JavaScript, TypeScript, SQL
  //         (Postgres, MySQL), GraphQL, HTML/CSS
  //       </p>
  //       <p>Frameworks: React, Next.js, Node.js, Express</p>
  //       <p>Developer Tools: Git, Docker, VS Code, Visual Studio, PyCharm</p>
  //       <p>Libraries: TensorFlow, Keras, Chakra-UI</p>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <h3 className="subheading text-2xl mb-2 text-center">Technical Skills</h3>
      <div className="skills-list space-y-8 mt-10">
        <div className="skills-list-item">
          <h4 className="skills-list-heading">Programming Languages</h4>
          <div className="flex justify-between w-full">
            <ul className="list-disc">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>GraphQL</li>
            </ul>
            <ul className="list-disc">
              <li>C++</li>
              <li>Java</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
        <div className="skills-list-item">
          <h4 className="skills-list-heading">Libraries/Frameworks</h4>
          <div className="flex justify-between w-full">
            <ul className="list-disc">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
            <ul className="list-disc">
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>TensorFlow</li>
              <li>Keras</li>
            </ul>
          </div>
        </div>
        <div className="skills-list-item">
          <h4 className="skills-list-heading">Databases & Tools</h4>
          <div className="flex justify-between w-full">
            <ul className="list-disc">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Git + Github</li>
            </ul>
            <ul className="list-disc">
              <li>VS Code</li>
              <li>PyCharm</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
