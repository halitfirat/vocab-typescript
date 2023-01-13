"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner_module_scss_1 = __importDefault(require("./Spinner.module.scss"));
const Spinner = () => {
    return <i className={Spinner_module_scss_1.default.inlineSpinner}></i>;
};
exports.default = Spinner;
