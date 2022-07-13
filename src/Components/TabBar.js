import React, { useState } from "react";
import _ from "lodash";

function TabBar(props) {
  const tabs = props.tabs;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setSelectedTab(tab) 
  }

  return (
    <div className="tab-row">
      {_.map(tabs, (tab) => {
        const active = tab === selectedTab;
        return (
          <div
            key={tab}
            className={active ? "tab-bar active" : "tab-bar"}
            onClick={(e) => handleClick(tab)}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}
export default TabBar;
