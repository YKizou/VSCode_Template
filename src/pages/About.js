import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";


const ReactLogo = require("../assets/logos/ReactLogo.png");

const JsLogo = require("../assets/logos/JsLogo.png");


const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");


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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros
            non nisi vulputate eleifend. Vestibulum erat ipsum, lacinia ut nibh
            ut, pulvinar interdum lorem. Aliquam et nisi eu risus ultrices
            suscipit nec nec quam. Suspendisse pretium fermentum luctus.
            Maecenas vitae vestibulum ipsum, ut varius diam. Phasellus mattis
            nunc vel purus maximus, sit amet congue ligula tincidunt. Nulla
            tristique luctus lacinia. Nullam ut tortor arcu.
          </code>
          <br />
          <br />
          <code>Aenean in mi non leo placerat suscipit a eget odio:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
