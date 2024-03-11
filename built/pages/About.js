"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var solid_1 = require("@heroicons/react/solid");
var List_1 = __importDefault(require("../components/List"));
var PythonLogo = require("../assets/logos/PythonLogo.png");
var ReactLogo = require("../assets/logos/ReactLogo.png");
var TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
var JsLogo = require("../assets/logos/JsLogo.png");
var NextLogo = require("../assets/logos/NextLogo.png");
var TailwindLogo = require("../assets/logos/TailwindLogo.png");
var SqlLogo = require("../assets/logos/SqlLogo.png");
var ReduxLogo = require("../assets/logos/ReduxLogo.png");
var FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
var MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
var NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
var DockerLogo = require("../assets/logos/DockerLogo.png");
var skills = [
    { name: "JavaScript (ES6+)", logo: JsLogo },
    { name: "Next.js", logo: NextLogo },
    { name: "React", logo: ReactLogo },
    { name: "TypeScript", logo: TypescriptLogo },
    { name: "Tailwind CSS", logo: TailwindLogo },
    { name: "Redux", logo: ReduxLogo },
    { name: "Python", logo: PythonLogo },
    { name: "Firebase", logo: FirebaseLogo },
    { name: "Nodejs", logo: NodeJSLogo },
    { name: "SQL", logo: SqlLogo },
    { name: "MongoDB", logo: MongoDBLogo },
    { name: "Docker", logo: DockerLogo },
];
var About = function () {
    return ((0, jsx_runtime_1.jsx)("div", { id: "About", className: "mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "table", children: [(0, jsx_runtime_1.jsx)(solid_1.IdentificationIcon, { className: "h-5 w-5 mr-4 text-yellow_vs" }), " ", (0, jsx_runtime_1.jsx)("code", { className: "table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap", children: "About Me" }), (0, jsx_runtime_1.jsx)("div", { className: "table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-[#a2aabc] text-lg mt-5", children: [(0, jsx_runtime_1.jsx)("code", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros non nisi vulputate eleifend. Vestibulum erat ipsum, lacinia ut nibh ut, pulvinar interdum lorem. Aliquam et nisi eu risus ultrices suscipit nec nec quam. Suspendisse pretium fermentum luctus. Maecenas vitae vestibulum ipsum, ut varius diam. Phasellus mattis nunc vel purus maximus, sit amet congue ligula tincidunt. Nulla tristique luctus lacinia. Nullam ut tortor arcu." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("code", { children: "Aenean in mi non leo placerat suscipit a eget odio:" }), (0, jsx_runtime_1.jsx)(List_1.default, { list: skills })] })] }) }));
};
exports.default = About;
