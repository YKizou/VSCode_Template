"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var solid_1 = require("@heroicons/react/solid");
var Contact = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "Contact", className: "pb-72 mt-36", children: [(0, jsx_runtime_1.jsxs)("div", { className: "table mx-12 lg:mx-60", children: [(0, jsx_runtime_1.jsx)(solid_1.MailIcon, { className: "h-5 w-5 mr-4 text-yellow_vs" }), (0, jsx_runtime_1.jsx)("code", { className: "table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap", children: "Get In Touch" }), (0, jsx_runtime_1.jsx)("div", { className: "table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify", children: [(0, jsx_runtime_1.jsxs)("code", { children: ["Currently looking for a new opportunity, you can contact me by clicking on the button below. ", (0, jsx_runtime_1.jsx)("br", {}), "Whether you have a question or just want to say hi, feel free to contact me and I\u2019ll try my best to get back to you!"] }), (0, jsx_runtime_1.jsx)("button", { className: " border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2", children: (0, jsx_runtime_1.jsx)("a", { href: "mailto:youssefkizou@gmail.com", children: (0, jsx_runtime_1.jsx)("code", { children: "Contact" }) }) })] })] }));
};
exports.default = Contact;
