"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var List = function (_a) {
    var list = _a.list;
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs", children: list &&
            list.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row  mb-3", children: [(0, jsx_runtime_1.jsx)("img", { src: item.logo, alt: item.name, className: "h-5 w-5 ml-3 mr-4 text-yellow_vs" }), (0, jsx_runtime_1.jsx)("code", { children: item.name })] }, index)); }) }));
};
exports.default = List;
