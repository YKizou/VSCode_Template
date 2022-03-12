import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  CodeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";
const MobileMenu = () => {
  const projects = [
    {
      name: "Weekly Planner",
      href: "https://simana.vercel.app/",
      icon: <CodeIcon className="w-5 text-yellow_vs mr-4" />,
      current: true,
    },
    {
      name: "Social Network",
      href: "https://kizbook.herokuapp.com/",
      icon: <CodeIcon className="w-5 text-yellow_vs mr-4" />,
      current: false,
    },
    {
      name: "Todo",
      href: "https://kizou.org/projects/todo",
      icon: <CodeIcon className="w-5 text-yellow_vs mr-4" />,
      current: false,
    },
    {
      name: "Uber Clone",
      href: "https://uber-r9vy5ju9b-youssefkizou-gmailcom.vercel.app",
      icon: <CodeIcon className="w-5 text-yellow_vs mr-4" />,
      current: false,
    },
    {
      name: "Chess",
      href: "https://kizou.org/projects/web/chess",
      icon: <CodeIcon className="w-5 text-yellow_vs mr-4" />,
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [showProjectsList, SetShowProjectsList] = useState(true);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {open ? (
              <XIcon className="block w-16" aria-hidden="true" />
            ) : (
              <MenuIcon className="block w-16" aria-hidden="true" />
            )}{" "}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="">
              <code className="px-2 pt-2 pb-3 space-y-1 text-white">
                <div
                  className="mb-2 ml-4 font-bold flex"
                  onClick={() => SetShowProjectsList(!showProjectsList)}
                >
                  {showProjectsList ? (
                    <ChevronDownIcon className="w-5 mr-4 text-yellow_vs" />
                  ) : (
                    <ChevronRightIcon className=" w-5 mr-4  text-yellow_vs" />
                  )}
                  Projects :
                </div>
                {showProjectsList
                  ? projects.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="flex ml-6">
                          {item.icon}
                          {item.name}
                        </div>
                      </Disclosure.Button>
                    ))
                  : null}
              </code>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default MobileMenu;
