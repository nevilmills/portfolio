import React, { useEffect, useState } from "react";
import { Education } from "../Education";
import { SectionHeader } from "../SectionHeader";
import { Tab } from "../Tab";
import { TabContainer } from "../TabContainer";
import { TechnicalSkills } from "../TechnicalSkills";
import AOS from "aos";
import "aos/dist/aos.css";

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const tabs = ["UFV", "Coming Soon"];
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <section
      id="experience"
      className="flex flex-col items-center py-28"
      data-aos="fade-up"
    >
      <div>
        <SectionHeader text="Skills & Experience" />
        <div className="mt-10">
          <div className="min-w-[380px] min-h-[420px]">
            <TabContainer tabs={tabs} active={active} setActive={setActive} />
            {active === tabs[0] ? (
              <Education />
            ) : (
              <div className="mt-8 primaryText text-xl text-center">
                <span className="block pt-4 mb-4">
                  Currently seeking a full-time opportunity.
                </span>
                <a className="highlighted text-lightGrey" href="/#projects">
                  View some of my work.
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="pt-12">
          <TechnicalSkills />
        </div>
      </div>
    </section>
  );
};
