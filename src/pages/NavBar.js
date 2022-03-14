import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { CogIcon, XIcon } from "@heroicons/react/solid";

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

const NavBar = ({ setHome, setOnlyAbout, setOnlyResume, setOnlyContact }) => {
  const [hideContact, setHideContact] = useState(false);
  const [hideAbout, setHideAbout] = useState(false);
  const [hideResume, setHideResume] = useState(false);

  return (
    <div className="flex flex-row h-full">
      <Container
        onClick={() => {
          setHome(true);
        }}
      >
        <img src={JSIcon} alt="JS Icon" className="w-7 mr-1  text-yellow_vs" />
        Home.js
      </Container>
      {hideAbout ? null : (
        <Container
          onClick={() => {
            setOnlyAbout(true);
            setHome(false);
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
              setOnlyAbout(false);
              setHome(true);
              setHideAbout(true);
            }}
          />
        </Container>
      )}
      {hideResume ? null : (
        <Container
          onClick={() => {
            setOnlyResume(true);
            setOnlyAbout(false);
            setHome(false);
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
              setOnlyResume(false);
              setHome(true);
              setHideResume(true);
            }}
          />
        </Container>
      )}
      {hideContact ? null : (
        <Container
          onClick={() => {
            setOnlyContact(true);
            setOnlyResume(false);
            setOnlyAbout(false);
            setHome(false);
          }}
        >
          <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
          Contact.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setOnlyContact(false);
              setHome(true);
              setHideContact(true);
            }}
          />
        </Container>
      )}
    </div>
  );
};
export default NavBar;
