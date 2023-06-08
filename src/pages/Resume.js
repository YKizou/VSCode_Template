import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-purple_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-purple_vs">Education:</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">UIET Panjab University Chandigarh </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              B.E. Mechanical Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • November 2021 - June 2025’
            </code>

            <br />
            <code className="text-blue_vs">SGRR Public School, Karanprayag</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              CBSE 12th
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • August 2018 - July 2020

            </code>
            <br />
            <code className="text-blue_vs">Dr. Jacques Vigne National School, Guptkashi</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              CBSE 10th
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2016 - July 2018
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">

          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-purple_vs">Achievements:</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Solved more than 400 DSA questions on platforms like GeekForGeeks and LeetCode.
              <br />• Among the top 5% in IIT-JEE (Mains) 2021 Mathematics.
              <br />• 5* in the problem-solving section of Hackerrank.
              <br />• Institute rank under 40 in GeeksForGeeks.

            </code>

            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
