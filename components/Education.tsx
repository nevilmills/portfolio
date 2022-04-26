import React from "react";

export const Education: React.FC<{}> = ({}) => {
  return (
    <div className="mt-8 primaryText">
      <h4 className="text-2xl subheading">University of the Fraser Valley</h4>
      <p className="mt-2 text-lighterGrey">September 2015 - August 2021</p>
      <ul className="arrow-list list-disc space-y-2 mt-4 ml-4">
        <li className="text-lightestGrey">
          Bachelor of Science in Computer Science
        </li>
        <li>Studies included:</li>
      </ul>
      <ul className="list-disc ml-14 mt-2 space-y-2">
        <li>Software Engineering</li>
        <li>Advanced Website Programming</li>
        <li>Extreme Computing</li>
        <li>Object-oriented Modeling and Design</li>
        <li>Introduction to Artificial Intelligence</li>
      </ul>
    </div>
  );
};
