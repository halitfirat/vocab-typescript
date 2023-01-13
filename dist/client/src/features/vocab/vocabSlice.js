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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabSlice = exports.addVocab = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
exports.addVocab = (0, toolkit_1.createAsyncThunk)("vocab/addVocabStatus", ({ vocabData }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.post("/api/vocabs", vocabData);
    return result;
}));
const initialState = {
    vocabs: [],
    vocabAdded: false,
};
exports.vocabSlice = (0, toolkit_1.createSlice)({
    name: "vocab",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exports.addVocab.pending, (state, action) => {
            state.vocabAdded = true;
        });
        builder.addCase(exports.addVocab.fulfilled, (state, action) => {
            const navigate = action.meta.arg.navigate;
            state.vocabAdded = false;
            react_toastify_1.toast.success("Added new Vocab!");
            navigate("/");
        });
        builder.addCase(exports.addVocab.rejected, (state, action) => {
            state.vocabAdded = false;
            console.error(action.error);
            react_toastify_1.toast.error("Failed to add new Vocab!");
        });
    },
});
exports.default = exports.vocabSlice.reducer;
