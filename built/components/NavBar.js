"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tailwind_styled_components_1 = __importDefault(require("tailwind-styled-components"));
var solid_1 = require("@heroicons/react/solid");
var JSIcon = require("../assets/icons/JSIcon.png");
var Container = tailwind_styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  h-full \n  flex \n  items-center \n  justify-center\n  px-4 \n  text-white \n  hover:bg-[#1e1e1e]\n  hover:text-yellow_vs\n  cursor-pointer\n  text-lg\n  font-medium\n  text-gray-300\n"], ["\n  h-full \n  flex \n  items-center \n  justify-center\n  px-4 \n  text-white \n  hover:bg-[#1e1e1e]\n  hover:text-yellow_vs\n  cursor-pointer\n  text-lg\n  font-medium\n  text-gray-300\n"])));
var ActiveContainer = tailwind_styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  h-full \n  flex \n  items-center \n  justify-center\n  px-4 \n  text-white \n  bg-[#1e1e1e]\n  hover:text-yellow_vs\n  cursor-pointer\n  text-lg\n  font-medium\n  text-gray-300\n"], ["\n  h-full \n  flex \n  items-center \n  justify-center\n  px-4 \n  text-white \n  bg-[#1e1e1e]\n  hover:text-yellow_vs\n  cursor-pointer\n  text-lg\n  font-medium\n  text-gray-300\n"])));
var NavBar = function (_a) {
    var showPage = _a.showPage, setShowPage = _a.setShowPage;
    var _b = (0, react_1.useState)([]), hidePage = _b[0], setHidePage = _b[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row h-full", children: [showPage === "home" ? ((0, jsx_runtime_1.jsxs)(ActiveContainer, { onClick: function () {
                    setShowPage("home");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "Home.js"] })) : ((0, jsx_runtime_1.jsxs)(Container, { onClick: function () {
                    setShowPage("home");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "Home.js"] })), hidePage.includes("about") ? null : showPage === "about" ? ((0, jsx_runtime_1.jsxs)(ActiveContainer, { onClick: function () {
                    setShowPage("about");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "About.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["about"], false); });
                        } })] })) : ((0, jsx_runtime_1.jsxs)(Container, { onClick: function () {
                    setShowPage("about");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "About.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["about"], false); });
                        } })] })), hidePage.includes("resume") ? null : showPage === "resume" ? ((0, jsx_runtime_1.jsxs)(ActiveContainer, { onClick: function () {
                    setShowPage("resume");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "Resume.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["resume"], false); });
                        } })] })) : ((0, jsx_runtime_1.jsxs)(Container, { onClick: function () {
                    setShowPage("resume");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1  text-yellow_vs" }), "Resume.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["resume"], false); });
                            console.log(hidePage);
                        } })] })), hidePage.includes("contact") ? null : showPage === "contact" ? ((0, jsx_runtime_1.jsxs)(ActiveContainer, { onClick: function () {
                    setShowPage("contact");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1 text-yellow_vs" }), "Contact.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["contact"], false); });
                        } })] })) : ((0, jsx_runtime_1.jsxs)(Container, { onClick: function () {
                    setShowPage("contact");
                }, children: [(0, jsx_runtime_1.jsx)("img", { src: JSIcon, alt: "JS Icon", className: "w-7 mr-1 text-yellow_vs" }), "Contact.js", (0, jsx_runtime_1.jsx)(solid_1.XIcon, { className: "w-6 ml-4 hover:bg-gray-600 hover:rounded", onClick: function (e) {
                            e.stopPropagation();
                            setShowPage("home");
                            setHidePage(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), ["contact"], false); });
                            console.log(hidePage);
                        } })] }))] }));
};
exports.default = NavBar;
var templateObject_1, templateObject_2;
