import { StyledTabs } from "./style";
import React, { useState } from "react";
import ThirdTab from "@/components/Tabs/AllTabs/ThirdTab";
import FirstTab from "@/components/Tabs/AllTabs/FirstTab";
import SecondTab from "@/components/Tabs/AllTabs/SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <StyledTabs>
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Our Experience
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Why Us ?
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Our Approach
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <FirstTab />
        ) : activeTab === "tab2" ? (
          <SecondTab />
        ) : (
          <ThirdTab />
        )}
      </div>
    </StyledTabs>
  );
};
export default Tabs;
