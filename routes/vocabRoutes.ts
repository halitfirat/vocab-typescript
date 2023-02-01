import { Express, Request, Response } from "express";
import mongoose from "mongoose";

const Vocab = mongoose.model("vocab");

module.exports = (app: Express) => {
  app.get("/api/vocabs", async (req: Request, res: Response) => {
    try {
      const result = await Vocab.find({}).exec();

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/api/vocabs/:id", async (req: Request, res: Response) => {
    try {
      const result = await Vocab.findById(req.params.id).exec();

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/api/vocabs", async (req: Request, res: Response) => {
    try {
      const result = await new Vocab(req.body).save();

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
