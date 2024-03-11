"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var About_1 = __importDefault(require("./About"));
var Contact_1 = __importDefault(require("./Contact"));
var LeftBar_1 = __importDefault(require("../components/LeftBar"));
var Resume_1 = __importDefault(require("./Resume"));
var MobileMenu_1 = __importDefault(require("../components/MobileMenu"));
var Header_1 = __importDefault(require("../components/Header"));
var NavBar_1 = __importDefault(require("../components/NavBar"));
var Home = function () {
    var _a = (0, react_1.useState)("home"), showPage = _a[0], setShowPage = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "home", className: "App flex h-max bg-[#1e1e1e]", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-[#262526] fixed h-full hidden lg:block", children: (0, jsx_runtime_1.jsx)(LeftBar_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-[#1e1e1e] lg:pl-72 h-full ", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)(MobileMenu_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "bg-[#424042] h-16 w-full fixed hidden lg:block", children: (0, jsx_runtime_1.jsx)(NavBar_1.default, { showPage: showPage, setShowPage: setShowPage }) }), showPage === "home" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Resume_1.default, {}), (0, jsx_runtime_1.jsx)(Contact_1.default, {})] })) : showPage === "about" ? ((0, jsx_runtime_1.jsx)(About_1.default, {})) : showPage === "resume" ? ((0, jsx_runtime_1.jsx)(Resume_1.default, {})) : showPage === "contact" ? ((0, jsx_runtime_1.jsx)(Contact_1.default, {})) : null] })] }));
};
exports.default = Home;
