"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const common_1 = require("../../common");
const vocabSlice_1 = require("./vocabSlice");
const VocabNew = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    const dispatch = (0, common_1.useAppDispatch)();
    const vocabAddedSelector = (0, common_1.useAppSelector)((state) => state.vocab.vocabAdded);
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)();
    const onHandleSubmit = handleSubmit((data) => {
        dispatch((0, vocabSlice_1.addVocab)({ vocabData: data, navigate }));
        setSubmitted(true);
    });
    return (<h2>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label>Native</label>
          <input {...register("native")}/>
        </div>
        <div>
          <label>Foreign</label>
          <input {...register("foreign")}/>
        </div>
        <button type="submit">
          Submit {submitted && vocabAddedSelector ? <common_1.Spinner /> : null}
        </button>
      </form>
    </h2>);
};
exports.default = VocabNew;
