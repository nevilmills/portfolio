import React, { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { Tab } from "../Tab";

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  const tabs = ["UFV", "Coming Soon..."];
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <section className="flex flex-col items-center py-28">
      <div>
        <SectionHeader text="Experience" />
        <div className="">
          {tabs.map((tab, idx) => {
            if (idx == 0) {
              return (
                <Tab
                  key={tab}
                  text={tab}
                  active={active === tab}
                  pos="first"
                  toggleActive={() => setActive(tab)}
                />
              );
            }
            if (idx == tabs.length - 1) {
              return (
                <Tab
                  key={tab}
                  text={tab}
                  active={active === tab}
                  pos="last"
                  toggleActive={() => setActive(tab)}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
