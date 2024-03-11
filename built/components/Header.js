"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function Header() {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "Header", className: "mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("code", { className: "text-lightblue_vs", children: "Hi, my name is" }), (0, jsx_runtime_1.jsx)("code", { className: "text-[#e6f1ff] text-7xl mt-5", children: "Lorem Ipsum" })] }), (0, jsx_runtime_1.jsx)("button", { className: "border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2", children: (0, jsx_runtime_1.jsx)("code", { children: "Check out my Projects !" }) })] }));
}
exports.default = Header;
