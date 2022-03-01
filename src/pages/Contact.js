import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-60 flex flex-col items-center text-justify">
        <code>
          Curabitur porta fringilla ex, ut sollicitudin purus congue sed. In
          eget purus vehicula, ornare libero quis, rutrum sapien. Etiam quis
          urna ut neque consectetur vestibulum ut sit amet libero.
        </code>
        <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <a href="mailto:yourmailadress@gmail.com">
            <code>Contact</code>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
