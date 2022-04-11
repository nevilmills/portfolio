import React from "react";

export const Introduction: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-col items-center w-full pt-24">
      <div className="max-w-lg space-y-2">
        <p className="text-2xl font-lato">Hi, my name is</p>
        <p className="text-5xl font-lato">Nevil Mills.</p>
        <p className="text-2xl font-lato">
          I'm a software engineer from Chilliwack, B.C. Currently, I am focused
          on developing full stack web applications as I search for a team of
          developers to join.
        </p>
      </div>
    </div>
  );
};
