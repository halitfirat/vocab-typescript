"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Spinner_module_scss_1 = __importDefault(require("./Spinner.module.scss"));
const Spinner = ({ inline }) => {
    return inline ? ((0, jsx_runtime_1.jsx)("i", { className: Spinner_module_scss_1.default.inlineSpinner })) : ((0, jsx_runtime_1.jsx)("div", { className: Spinner_module_scss_1.default.spinner }));
};
exports.default = Spinner;
