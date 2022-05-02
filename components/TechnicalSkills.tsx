import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TechnicalSkillsProps {}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="skills-list space-y-10 mt-10">
        <div className="skills-list-item">
          <h4 className="skills-list-heading">Programming Languages</h4>
          <div className="flex justify-between w-full ml-4">
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
          <div className="flex justify-between w-full ml-4">
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
          <div className="flex justify-between w-full ml-4">
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
