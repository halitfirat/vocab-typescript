"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const vocabSlice_1 = require("./vocabSlice");
const common_1 = require("../../common");
const VocabList = () => {
    const dispatch = (0, common_1.useAppDispatch)();
    const gettingVocabSelector = (0, common_1.useAppSelector)((state) => state.vocab.gettingVocabs);
    const vocabs = (0, common_1.useAppSelector)((state) => state.vocab.vocabs);
    (0, react_1.useEffect)(() => {
        fetchVocabs();
        // eslint-disable-next-line
    }, []);
    const fetchVocabs = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch((0, vocabSlice_1.getVocabs)());
    });
    return gettingVocabSelector === "pending" ? ((0, jsx_runtime_1.jsx)(common_1.Spinner, {})) : ((0, jsx_runtime_1.jsx)("ul", { children: vocabs.map((vocab) => {
            return ((0, jsx_runtime_1.jsxs)("li", { children: [vocab.native, " - ", vocab.foreign] }));
        }) }));
};
exports.default = VocabList;
