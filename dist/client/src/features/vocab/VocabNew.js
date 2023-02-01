"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const common_1 = require("../../common");
const vocabSlice_1 = require("./vocabSlice");
const VocabNew = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, common_1.useAppDispatch)();
    const loadingSelector = (0, common_1.useAppSelector)((state) => state.vocab.loading);
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)();
    const onHandleSubmit = handleSubmit((data) => {
        dispatch((0, vocabSlice_1.addVocab)({ vocabData: data, navigate }));
    });
    return ((0, jsx_runtime_1.jsx)("h2", { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: onHandleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Native" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("native")))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Foreign" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("foreign")))] }), (0, jsx_runtime_1.jsxs)("button", Object.assign({ type: "submit" }, { children: ["Submit ", loadingSelector === "pending" ? (0, jsx_runtime_1.jsx)(common_1.Spinner, { inline: true }) : null] }))] })) }));
};
exports.default = VocabNew;
