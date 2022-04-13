import React from "react";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <div className="nav">
      <div className="mr-8 space-x-6">
        <div className="inline-block">
          <a className="p-2 underlineTarget" href="/">
            About
          </a>
          <div className="underline bg-black" />
        </div>
        <div className="inline-block">
          <a className="underlineTarget" href="/">
            Experience
          </a>
          <div className="underline bg-black" />
        </div>
        <div className="inline-block">
          <a className="p-2 underlineTarget" href="/">
            Projects
          </a>
          <div className="underline bg-black" />
        </div>
        <button className="btn btn-darkliver">Resume</button>
      </div>
    </div>
  );
};
