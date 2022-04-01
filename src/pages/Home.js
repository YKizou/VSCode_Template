import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
  const [showPage, setShowPage] = useState("home");

  return (
    <div id="home" className="App flex h-max bg-[#1e1e1e]">
      <div className="bg-[#262526] fixed h-full hidden lg:block">
        <LeftBar />
      </div>
      <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
          <NavBar
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage==="home" ? (
          <>
            <Header id="Header" />
            <About id="About" />
            <Resume id="Resume" />
            <Contact id="Contact" />{" "}
          </>
        ) : showPage==="about" ? (
          <About id="About" />
        ) : showPage==="resume" ? (
          <Resume id="Resume" />
        ) : showPage==="contact" ? (
          <Contact id="Contact" />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
