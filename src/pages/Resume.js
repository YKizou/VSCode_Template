import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";
import wrensume from "/Users/wren/Desktop/webprojects/Javascript/Wren_Portfolio/src/assets/logos/wrensume.docx.pdf"

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}

          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          My Projects:
            <br />
            <br />
            WIP
            <br />
            <br />
            My Resume: 
            <br />
            <br />
            <a href={wrensume} download className="button">
              Download PDF
            </a>
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
