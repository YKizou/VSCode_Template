import React, { useState } from "react";
import {
  CodeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  IdentificationIcon,
} from "@heroicons/react/solid";
import { MailIcon, ClipboardListIcon } from "@heroicons/react/outline";

const GitLogo = require("../assets/GitLogo.png");
const LinkedinLogo = require("../assets/LinkedinLogo.png");
const KaggleLogo = require("../assets/KaggleLogo.png");
const MailLogo = require("../assets/MailLogo.png");

const LeftBar = (props) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showAboutList, SetShowAboutList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
          <p>First Project</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
          <p>Second Project</p>
        </div>
      </a>
      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
          <p>Third Project</p>
        </div>
      </a>
      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <CodeIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
          <p>Fourth Project</p>
        </div>
      </a>
    </div>
  );

  const AboutList = () => (
    <div>
      <div
        className="ml-10 flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]"
        onClick={() => props.SetScroll("About")}
      >
        <IdentificationIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
        <p>About Me</p>
      </div>
      <div
        className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-10"
        onClick={() => props.SetScroll("Resume")}
      >
        <ClipboardListIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
        <p>Resume</p>
      </div>
      <div
        className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-10"
        onClick={() => props.SetScroll("Contact")}
      >
        <MailIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
        <p>Contact</p>
      </div>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowAboutList(!showAboutList)}
        >
          {showAboutList ? (
            <ChevronDownIcon className="h-5 w-5 mr-1  text-yellow_vs" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 mr-1  text-yellow_vs" />
          )}
          <p>About</p>
        </div>
        {showAboutList ? <AboutList /> : null}
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="h-5 w-5 mr-1  text-yellow_vs" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 mr-1  text-yellow_vs" />
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
                <ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
              ) : (
                <ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="/">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="/">
              <img
                src={KaggleLogo}
                alt="Kaggle Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="/">
              <img
                src={MailLogo}
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
