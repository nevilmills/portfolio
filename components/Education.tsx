import React from "react";

export const Education: React.FC<{}> = ({}) => {
  return (
    <div className="mt-8">
      <h4>University of the Fraser Valley</h4>
      <p>September 2015 - August 2021</p>
      <ul className="list-disc">
        <li>Bachelor of Science in Computer Science</li>
        <li>
          Studies included:
          <ul className="list-disc ml-10">
            <li>Software Engineering</li>
            <li>Advanced Website Programming</li>
            <li>Extreme Computing</li>
            <li>Object-oriented Modeling and Design</li>
            <li>Introduction to Artificial Intelligence</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
