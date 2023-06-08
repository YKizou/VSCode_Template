import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const DartLogo = require("../assets/logos/DartLogo.png");
const GithubLogo = require("../assets/logos/GithubLogo.png");
const FlutterLogo = require("../assets/logos/FlutterLogo.png");
const CLogo = require("../assets/logos/CLogo.png");
const BashLogo = require("../assets/logos/BashLogo.png");
const AppWrite = require("../assets/logos/AppwriteLogo.png");
const BootStrap = require("../assets/logos/BootStrapLogo.png");
const CodeLogo = require("../assets/logos/CodeLogo.png");
const AndroidLogo = require("../assets/logos/AndroidLogo.png");
const PostmanLogo = require("../assets/logos/PostmanLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-purple_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I'm a passionate third-year undergraduate student at UIET, Panjab University in Chandigarh. Presently, I reside in the serene city of Dehradun, Uttarakhand. My journey as a Flutter developer has been incredibly fulfilling.  I am driven by a constant desire to learn and grow in this ever-evolving field, and I am excited to contribute to the world of technology with my creative and efficient coding abilities.
          </code>
          <br />
          <br />
          <code>Tech Stack:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={FlutterLogo}
                alt="Flutter"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Flutter</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DartLogo}
                alt="Dart"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Dart</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={JsLogo}
                alt="JavaScript"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CLogo}
                alt="C++"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C++</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={AppWrite}
                alt="C++"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>AppWrite</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={BootStrap}
                alt="BootStrap"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>BootStrap</code>
            </div>



          </div>
          <code>Developer Tools :</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={CodeLogo}
                alt="Flutter"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>VS Code</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={AndroidLogo}
                alt="Dart"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Android Studio</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={BashLogo}
                alt="JavaScript"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bash</code>
            </div>

            <div className="flex flex-row  mb-3">
              <img
                src={GithubLogo}
                alt="C++"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Git</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PostmanLogo}
                alt="C++"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Postman</code>
            </div>
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

export default About;