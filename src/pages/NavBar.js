import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { CogIcon, XIcon } from "@heroicons/react/solid";

const Container = tw.div`
  h-full 
  w-48 
  flex 
  items-center 
  justify-center 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
  relative
`;

const NavBar = ({ setHome, setOnlyAbout, setOnlyResume, setOnlyContact }) => {
  const [hideContact, setHideContact] = useState(false)
  const [hideAbout, setHideAbout] = useState(false)
  const [hideResume, setHideResume] = useState(false)

  
  return (
    <div className="flex flex-row h-full">
      <Container
        onClick={() => {
          setHome(true);
        }}
      >
        Home.js
      </Container> 
      {hideAbout ? null: <Container
        onClick={() => {
          setOnlyAbout(true);
          setHome(false);
        }}
      >
        About.js
        <XIcon className="w-6 absolute right-3 hover:bg-gray-600 hover:rounded" onClick={()=>setHideAbout(true)}/>
      </Container> }
      {hideResume ? null: <Container
        onClick={() => {
          setOnlyResume(true);
          setOnlyAbout(false);
          setHome(false);
        }}
      >
        Resume.js
        <XIcon className="w-6 absolute right-3 hover:bg-gray-600 hover:rounded" onClick={()=>setHideResume(true)}/>
      </Container> }
      {hideContact ? null:  <Container
              onClick={() => {
                setOnlyContact(true);
                setOnlyResume(false);
                setOnlyAbout(false);
                setHome(false);
              }}
      >Contact.js
              <XIcon className="w-6 absolute right-3 hover:bg-gray-600 hover:rounded" onClick={()=>{setHideContact(true) 
                setOnlyContact(false)
                }}/>
      </Container> }
    </div>
  );
};
export default NavBar;
