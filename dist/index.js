"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./models/Vocab");
dotenv_1.default.config();
const mongoURI = process.env.MONGO_URI || "";
mongoose_1.default.connect(mongoURI);
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("./routes/vocabRoutes")(app);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
