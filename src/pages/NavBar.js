import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const DartIcon = require("../assets/logos/DartLogo.png");

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

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const NavBar = ({ showPage, setShowPage }) => {
  const [hidePage, setHidePage] = useState([]);

  return (
    <div className="flex flex-row h-full">
      {showPage === "home" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("home");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.dart
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("home");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.dart
        </Container>
      )}
      {hidePage.includes("about") ? null : showPage === "about" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("about");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "about"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("about");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "about"]);
            }}
          />
        </Container>
      )}
      {hidePage.includes("resume") ? null : showPage === "resume" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("resume");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Resume.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "resume"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("resume");
          }}
        >
          <img
            src={DartIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Resume.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "resume"]);
              console.log(hidePage);
            }}
          />
        </Container>
      )}
      {hidePage.includes("contact") ? null : showPage === "contact" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("contact");
          }}
        >
          <img src={DartIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
          Contact.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "contact"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("contact");
          }}
        >
          <img src={DartIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
          Contact.dart
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState => [...prevState, "contact"]);
              console.log(hidePage);

            }}
          />
        </Container>
      )}
    </div>
  );
};
export default NavBar;
