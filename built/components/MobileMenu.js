"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var solid_1 = require("@heroicons/react/solid");
var react_2 = require("@headlessui/react");
var JSIcon = require("../assets/icons/JSIcon.png");
var TSIcon = require("../assets/icons/TSIcon.png");
var MobileMenu = function () {
    var projects = [
        {
            name: "First Project",
            href: "#",
            icon: (0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  ml-5 text-yellow_vs" }),
            current: true,
        },
        {
            name: "Second Project",
            href: "#",
            icon: (0, jsx_runtime_1.jsx)("img", { src: TSIcon, alt: "TS Icon", className: "w-7 mr-1  ml-5 text-yellow_vs" }),
            current: false,
        },
        {
            name: "Third Project",
            href: "#",
            icon: (0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  ml-5 text-yellow_vs" }),
            current: false,
        },
        {
            name: "Fourth Project",
            href: "#",
            icon: (0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  ml-5 text-yellow_vs" }),
            current: false,
        },
    ];
    function classNames() {
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        return classes.filter(Boolean).join(" ");
    }
    var _a = (0, react_1.useState)(true), showProjectsList = _a[0], SetShowProjectsList = _a[1];
    return ((0, jsx_runtime_1.jsx)(react_2.Disclosure, { children: function (_a) {
            var open = _a.open;
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_2.Disclosure.Button, { className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [open ? ((0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "block w-16", "aria-hidden": "true" })) : ((0, jsx_runtime_1.jsx)(solid_1.MenuIcon, { className: "block w-16", "aria-hidden": "true" })), " "] }), (0, jsx_runtime_1.jsx)(react_2.Transition, { enter: "transition duration-100 ease-out", enterFrom: "transform scale-95 opacity-0", enterTo: "transform scale-100 opacity-100", leave: "transition duration-75 ease-out", leaveFrom: "transform scale-100 opacity-100", leaveTo: "transform scale-95 opacity-0", children: (0, jsx_runtime_1.jsx)(react_2.Disclosure.Panel, { className: "", children: (0, jsx_runtime_1.jsxs)("code", { className: "px-2 pt-2 pb-3 space-y-1 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-2 ml-4 font-bold flex text-xl", onClick: function () { return SetShowProjectsList(!showProjectsList); }, children: [showProjectsList ? ((0, jsx_runtime_1.jsx)(solid_1.ChevronDownIcon, { className: "w-7 mr-4" })) : ((0, jsx_runtime_1.jsx)(solid_1.ChevronRightIcon, { className: " w-7 mr-4 " })), "Projects :"] }), showProjectsList
                                        ? projects.map(function (item) { return ((0, jsx_runtime_1.jsx)(react_2.Disclosure.Button, { as: "a", href: item.href, className: classNames(item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"), "aria-current": item.current ? "page" : undefined, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex ml-6", children: [item.icon, item.name] }) }, item.name)); })
                                        : null] }) }) })] }));
        } }));
};
exports.default = MobileMenu;
