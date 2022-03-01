import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import FrontPage from "./FrontPage";
import LeftBar from "./LeftBar";
import Resume from "./Resume";

const Home = () => {
  const [scroll, SetScroll] = useState();

  useEffect(() => {
    return scroll
      ? document
          .getElementById(scroll)
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })
      : null;
  }, [scroll]);

  return (
    <>
      <div id="home" className="App flex">
        <div className="bg-[#262526] w-72 fixed h-full">
          <LeftBar scroll={scroll} SetScroll={SetScroll} />
        </div>
        <div className="bg-[#1e1e1e] h-full ml-72 w-full">
          <FrontPage scroll={scroll} SetScroll={SetScroll} />
          <About id="About" />
          <Resume id="Resume" />
          {/* <Projects id="Projects"/> */}
          <Contact id="Contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
