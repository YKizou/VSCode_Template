import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
  return (
    <div id="Header" className=" flex mx-20 lg:mx-80 pt-80 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs text-xl">Hey, I'm</code>
        <code className="text-[#e6f1ff] text-6xl mt-5">Vaibhav Lakhera</code>
        <br />


        <div className="flex items-center">
          <code className="text-purple_vs text-2xl mr-5  "> $</code>
          <code className="text-[#e6f1ff] text-2xl  "> flutter create --platforms =</code>
          <TypeWriterEffect
            textStyle={{
              color: "#D9E577",
              margin: "0px 0px 0px 10px",
              fontSize: "24px",
              lineHeight: "36px",
            }}
            startDelay={1000}
            cursorColor="#389fdc"
            multiText={[
              'Android .',
              'iOS .',
              'Web .',
              'Linux .',
              'Windows .',
              'MacOS .'


            ]}
            multiTextDelay={1000}
            typeSpeed={60}
            multiTextLoop={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
