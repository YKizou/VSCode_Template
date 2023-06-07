import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GithubLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const TwitterLogo = require("../assets/logos/TwitterLogo.png");
const LeetcodeLogo = require("../assets/logos/LeetcodeLogo.png");



const ReactIcon = require("../assets/logos/ReactLogo.png");
const FlutterIcon = require("../assets/logos/FlutterLogo.png");
const JSIcon = require("../assets/icons/JSIcon.png");


const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showMobileList, SetMobileList] = useState(true);

  const WebList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="Flutter"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Whatsapp Web UI</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={ReactIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Portfolio</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Calculator</p>
        </div>
      </a>


    </div>
  );
  const MobileList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="Flutter"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>ChatCrow</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Whatsapp UI</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>IND News</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>FlutterXOpenAI</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Movies App</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={FlutterIcon}
            alt="React"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>GSOC23 Timeline</p>
        </div>
      </a>


    </div>
  );


  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>

            {showWebList ? <WebList /> : null}

            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetMobileList(!showMobileList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Mobile</p>
            </div>

            {showMobileList ? <MobileList /> : null}

          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-5 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/vaibhav-init">
              <img
                src={GitLogo}
                alt="Github"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://linkedin.com/in/vaibhavlakhera">
              <img
                src={LinkedinLogo}
                alt="Linkedin"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://leetcode.com/vaibhav_cpp">
              <img
                src={LeetcodeLogo}
                alt="Leetcode"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://twitter.com/twt_vaibhav">
              <img
                src={TwitterLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
