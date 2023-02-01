"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const vocabSlice_1 = require("./vocabSlice");
const common_1 = require("../../common");
const VocabOne = () => {
    const params = (0, react_router_dom_1.useParams)();
    const dispatch = (0, common_1.useAppDispatch)();
    const singleSelector = (0, common_1.useAppSelector)((state) => state.vocab.single);
    const loadingSelector = (0, common_1.useAppSelector)((state) => state.vocab.loading);
    (0, react_1.useEffect)(() => {
        fetchVocab();
        // eslint-disable-next-line
    }, []);
    const fetchVocab = () => {
        dispatch((0, vocabSlice_1.getVocab)(params.id || ""));
    };
    return loadingSelector === "pending" ? ((0, jsx_runtime_1.jsx)(common_1.Spinner, { inline: true })) : ((0, jsx_runtime_1.jsxs)("span", { children: [singleSelector === null || singleSelector === void 0 ? void 0 : singleSelector.native, " - ", singleSelector === null || singleSelector === void 0 ? void 0 : singleSelector.foreign] }));
};
exports.default = VocabOne;
