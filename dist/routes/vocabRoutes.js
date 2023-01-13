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
const mongoose_1 = __importDefault(require("mongoose"));
const Vocab = mongoose_1.default.model("vocab");
const vocabs = [
    {
        _id: "vocab1",
        native: "springen",
        foreign: "jump",
    },
    {
        _id: "vocab2",
        native: "lachen",
        foreign: "laugh",
    },
];
module.exports = (app) => {
    app.get("/api/vocabs", (req, res) => {
        res.send(vocabs);
    });
    app.post("/api/vocabs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield new Vocab(req.body).save();
            res.send(result);
        }
        catch (error) {
            console.log(error);
        }
    }));
};
