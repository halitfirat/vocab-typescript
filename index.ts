import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
require("./models/Vocab");

dotenv.config();

const mongoURI: string = process.env.MONGO_URI || "";
mongoose.connect(mongoURI);

const app: Express = express();
app.use(express.json());

require("./routes/vocabRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
