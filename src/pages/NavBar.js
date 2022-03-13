import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`
  h-full 
  w-48 
  flex 
  items-center 
  justify-center 
  text-white 
  hover:bg-[#1e1e1e] 
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const NavBar = ({ setHome, setOnlyAbout, setOnlyResume, setOnlyContact }) => {
  return (
    <div className="flex flex-row h-full">
      <Container
        onClick={() => {
          setHome(true);
        }}
      >
        Home.js
      </Container>
      <Container
        onClick={() => {
          setOnlyAbout(true);
          setHome(false);
        }}
      >
        About.js
      </Container>
      <Container
        onClick={() => {
          setOnlyResume(true);
          setOnlyAbout(false);
          setHome(false);
        }}
      >
        Resume.js
      </Container>
      <Container
              onClick={() => {
                setOnlyContact(true);
                setOnlyResume(false);
                setOnlyAbout(false);
                setHome(false);
              }}
      >Contact.js</Container>
    </div>
  );
};
export default NavBar;
