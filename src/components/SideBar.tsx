import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

const SideBar = ({
  setWidth,
  width,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setWidth(parseInt(savedWidth));
    }
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
        <div>
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
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
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
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
            </>
          ) : null}
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a href="/">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={KaggleLogo}
                  alt="Kaggle Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={MailLogo}
                  alt="Mail Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      ></div>
    </div>
  );
};

export default SideBar;

const WebList = () => (
  <div className="flex flex-col">
    <a href="/">
      <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
        <img
          src={JSIcon}
          alt="JS Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p>First Project</p>
      </div>
    </a>
    <a href="/">
      <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
        <img
          src={TSIcon}
          alt="TS Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p>Second Project</p>
      </div>
    </a>
    <a href="/">
      <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
        <img
          src={JSIcon}
          alt="JS Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p>Third Project</p>
      </div>
    </a>
    <a href="/">
      <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
        <img
          src={JSIcon}
          alt="JS Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p>Fourth Project</p>
      </div>
    </a>
  </div>
);
