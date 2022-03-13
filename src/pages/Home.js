import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {

  const [home, setHome] = useState(true)
  const [onlyAbout, setOnlyAbout] = useState(false)
  const [onlyResume, setOnlyResume] = useState(false)
  const [onlyContact, setOnlyContact] = useState(false)

  return (
      <div id="home" className="App flex h-max bg-[#1e1e1e]">
        <div className="bg-[#262526] fixed h-full hidden lg:block">
          <LeftBar />
        </div>
        <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <div className="bg-[#424042] h-16 w-full fixed">
            <NavBar setHome={setHome} setOnlyAbout={setOnlyAbout} setOnlyResume={setOnlyResume} setOnlyContact={setOnlyContact}/>
          </div>
          {home ? <><Header id="Header"/>
          <About id="About" />
          <Resume id="Resume" />
          <Contact id="Contact" /> </>: onlyAbout ? <About id="About" /> : onlyResume ? <Resume id="Resume"/> : onlyContact ? <Contact id="Contact"/> : null }
        </div>
      </div>
  );
};

export default Home;
