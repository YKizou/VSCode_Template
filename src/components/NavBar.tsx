import React, { useState } from "react";
import cx from "classnames";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/icons/JSIcon.png");

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [closedTabs, setClosedTabs] = useState<string[]>([]);

  return (
    <div className="flex flex-row h-full">
      <Container
        className={
          activeTab === "home"
            ? "bg-[#1e1e1e] text-yellow_vs"
            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
        }
        onClick={() => {
          setActiveTab("home");
        }}
      >
        <img src={JSIcon} alt="JS Icon" className="w-7 mr-1  text-yellow_vs" />
        Home.js
      </Container>

      {closedTabs.includes("about") ? null : (
        <Container
          hidden={"about" in closedTabs}
          className={
            activeTab === "about"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("about");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "about"]);
            }}
          />
        </Container>
      )}

      {closedTabs.includes("resume") ? null : (
        <Container
          className={
            activeTab === "resume"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("resume");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Resume.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "resume"]);
            }}
          />
        </Container>
      )}

      {closedTabs.includes("contact") ? null : (
        <Container
          className={
            activeTab === "contact"
              ? "bg-[#1e1e1e] text-yellow_vs"
              : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
          }
          onClick={() => {
            setActiveTab("contact");
          }}
        >
          <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
          Contact.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab("home");
              setClosedTabs((prevState) => [...prevState, "contact"]);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default NavBar;