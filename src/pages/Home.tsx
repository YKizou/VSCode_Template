import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "../components/LeftBar";
import Resume from "./Resume";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

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
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {activeTab === "home" && (
          <>
            <Header />
            <About />
            <Resume />
            <Contact />
          </>
        )}
        { activeTab === "about" && (
          <About />)}
          { activeTab === "resume" && (
          <Resume />)}
          { activeTab === "contact" && (
          <Contact />)}
      </div>
    </div>
  );
};

export default Home;
