import React, { useState } from "react";
import { FolderOpenIcon } from "@heroicons/react/solid";
import {
  CodeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

const Projects = () => {
  const [showWebProjects, SetShowWebProjects] = useState(true);
  const [beta, SetBeta] = useState();

  const WebProjects = () => (
    <div>
      <div
        className="ml-10 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]"
        onClick={() => SetBeta("todo")}
      >
        <CodeIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
        <p>Todo</p>
      </div>
      <div
        className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-10"
        onClick={() => SetBeta("uber")}
      >
        <CodeIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
        <p>Uber Clone</p>
      </div>
      <div
        className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-10"
        onClick={() => SetBeta("instagram")}
      >
        <CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
        <p>Instagram Clone</p>
      </div>
    </div>
  );

  const renderSwitch = () => {
    switch (beta) {
      case "todo":
        return <div>TOOODOOO</div>;
      case "uber":
        return <div>UUBER</div>;
      case "instagram":
        return <div>Instagram</div>;
      default:
        return <div>Default</div>;
    }
  };

  return (
    <div id="Projects" className="mt-64 pb-36">
      <div className="table mx-60">
        <FolderOpenIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Projects
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-32">
        <div className="flex space-x-5 mb-28 border border-x-gray-700">
          <div className="bg-[#262526] w-2/5">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold">
              <ChevronDownIcon className="h-5 w-5 mr-1  text-yellow_vs" />
              <p>Projects</p>
            </div>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
              onClick={() => SetShowWebProjects(!showWebProjects)}
            >
              <ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
              <p>Web</p>
            </div>
            {showWebProjects ? <WebProjects /> : null}
            <div className="flex hover:cursor-pointer items-center hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold">
              <ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
              <p>Mobile</p>
            </div>
          </div>
          <div className="w-3/5">{renderSwitch()}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
