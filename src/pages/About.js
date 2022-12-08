import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Hey, I'm Wren! I'm a Claims Specialist-turned-Software 
          Engineer and recent graduate of the Grace Hopper Program at Fullstack Academy. 
          Before I took a leap of faith and decided to become a software engineer, 
          I worked in various client-facing roles including one in a start-up environment that 
          really helped me sharpen my skills in cross-team collaboration, communication, 
          and problem resolution.
          <br />
          <br />
          As a next step, I'm looking to leverage my team skills 
          in a full-time software engineering/web development role. 
          In particular, I'm interested in joining a driven, diverse team where 
          I can build creative and innovative projects that make an impact on people. 
          What you can expect from me is a fast and nimble learner that brings a 
          can-do attitude to all projects and knows how to convert feedback into successful results.
          <br />
          <br />
          Feel free to reach out on LinkedIn or via email I'd love to chat!
          </code>
          <br />
          <br />
          <code>My skills include:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            
            <div className="flex flex-row mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Redux</code>
            </div>
            
            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
