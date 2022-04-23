import React, { useState } from "react";
import { Education } from "../Education";
import { SectionHeader } from "../SectionHeader";
import { Tab } from "../Tab";
import { TabContainer } from "../TabContainer";
import { TechnicalSkills } from "../TechnicalSkills";

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  const tabs = ["UFV", "Coming Soon"];
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <section className="flex flex-col items-center py-28">
      <div>
        <SectionHeader text="Experience" />
        <div className="flex mt-10">
          <div className="min-w-[380px] min-h-[420px]">
            <TabContainer tabs={tabs} active={active} setActive={setActive} />
            {active === tabs[0] ? (
              <Education />
            ) : (
              <div className="mt-8 primaryText text-xl">
                <span className="block mb-4">
                  Currently seeking a full-time opportunity.
                </span>
                <a>View some of my work.</a>
              </div>
            )}
          </div>
          <div className="self-center ml-20">
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </section>
  );
};
