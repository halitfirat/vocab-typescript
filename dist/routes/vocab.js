"use strict";
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
    app.post("/api/vocabs", (req, res) => {
        try {
            console.log(req.body);
        }
        catch (error) {
            console.log(error);
        }
    });
};
