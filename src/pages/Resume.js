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
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Metropolitan Community College</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Associates in Information technology
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              -- Front-End Web Development
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2017 - August 2019
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-12">
          <div className="w-1/4">
            <code className="text-yellow_vs text-xl font-bold underline">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">WordPress Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Location: Omaha, NE <br/>
              Company: {"Lemon Fresh Day"}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• March 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Build website using Wordpress.
              <br />• Prepare website proposals to present to clients.
              <br />• Provide technical support to clients.
              <br />• Write coding using HTML, CSS, &amp; JavaScript.
              <br />• Maintain and make updates to PHP code.
              <br />• Design new features for existing websites.
              <br />• Customize themes to meet clients’ requirements.
              <br />• Manage a user guide to help clients understand site features and management of website to increase visitor satisfaction.
              <br />• Work on a new mobile development project to expand the company into mobile website development services.
              <br />• Act as the company expert in creating e-commerce to be integrated with new website builds.
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs "></code>
          </div>
          <div className="w-3/4 px-5">
            <code className="text-blue_vs">Software Engineer, <br/>
           Code Instructor &amp; Manager</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Location: Omaha, NE <br/>
              Company: {"AIM Institute"}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Jan 2020 - Present</code>
            <br/>
                  
          
          </div>
        </div>

        <div className="flex flex-row pt-12">
          <div className="w-1/4 ">
            <code className="text-yellow_vs">Software Engineer Duties</code>
          </div>
        <div className="w-3/4">
            <code className="text-sm"></code>
            <br />
            <code className="text-sm">
              <br />• Developing and maintaining AIM’s technology platform.
              <br />• Teaching students enrolled in AIM technical courses and programs.
              <br />• Managing all other instructors.
              <br />• Work with Grants Officer personnel to provide them course information needed for accreditation.
              <br />• The Managing Instructor will work with the President and CEO - and the AIM curriculum committee -  to define what courses are needed in order to better operate the school and deliver successful courses.
              <br />• Design and/or code applications, following specifications and using the appropriate tools.
              <br />• Maintain and modify existing applications as well as perform maintenance programming for existing versions.
              <br />• Perform custom programming and assume responsibility for ongoing data architecture for products.
            </code>
        </div>
      </div>

        

        <div className="flex flex-row pt-12">
          <div className="w-1/4">
            <code className="text-yellow_vs">Manager Duties</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Supervise instructors to ensure they develop new curriculum for the school based on industry experience and established contacts with.
              <br />• Managing all other instructors.
              <br />• The Managing Instructor will work with the President and CEO - and the AIM curriculum committee -  to define what courses are needed in order to better operate the school and deliver successful courses.
              <br />• Oversees course and instructors.
              <br />• In order to better track and report student data, standardize the use of Lacai for recordkeeping and reporting.  .
            
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-12">
          <div className="w-1/4">
            <code className="text-yellow_vs">Instructor Duties</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />•Instruct day/evening classes/workshops, including but not limited to those offered virtually and at various locations.
              <br />• Record instructional videos (introductory, short recordings and recordings to support the online curriculum delivery mentioned above).
              <br />• Maintain positive relationships with partners and students at all times.
              <br />• Maintain the AIM Student portal for student curriculum.
            </code>
          </div>
        </div>
        
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Web Design
              <br />• UX
              <br />• UI
              <br />• JavaScript
              <br />• HTML
              <br />• CSS
              <br />• React/React-Native
              <br />• Wordpress
              <br />• Nodejs
              <br />• REST APIs
              <br />• SQL / NOSQL
              <br />• TypeScript (beginner-mid)
              <br />• BootStrap
              <br />• TailWind
              <br />• Java
              <br />• SpringBoot
              <br />• jQuery
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
