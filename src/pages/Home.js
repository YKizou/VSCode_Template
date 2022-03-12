import React from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div id="home" className="App flex h-full ">
        <div className="bg-[#262526] fixed h-full hidden lg:block  ">
          <LeftBar />
        </div>
        <div className="bg-[#1e1e1e] lg:pl-64 h-full ">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <Header />
          <About id="About" />
          <Resume id="Resume" />
          <Contact id="Contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
