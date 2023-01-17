"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const VocabOne = () => {
    const params = (0, react_router_dom_1.useParams)();
    return (0, jsx_runtime_1.jsx)("h2", { children: params.id });
};
exports.default = VocabOne;
