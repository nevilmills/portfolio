import React, { useState } from "react";
import { Education } from "../Education";
import { SectionHeader } from "../SectionHeader";
import { Tab } from "../Tab";
import { TabContainer } from "../TabContainer";

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  const tabs = ["UFV", "Coming Soon..."];
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <section className="flex flex-col items-center py-28">
      <div>
        <SectionHeader text="Experience" />
        <div className="mt-10" />
        <TabContainer tabs={tabs} active={active} setActive={setActive} />
        {active === tabs[0] ? (
          <Education />
        ) : (
          <div>
            <span className="block">
              Currently seeking a full-time opportunity.
            </span>
            <a>View some of my work.</a>
          </div>
        )}
      </div>
    </section>
  );
};
