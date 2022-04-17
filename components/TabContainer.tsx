import React from "react";
import { stateAction } from "../utils/types";
import { Tab } from "./Tab";

interface TabContainerProps {
  tabs: string[];
  active: string;
  setActive: stateAction;
}

export const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  active,
  setActive,
}) => {
  return (
    <div>
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
  );
};
