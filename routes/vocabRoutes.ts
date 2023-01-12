import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

const Vocab = mongoose.model("vocab");

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

module.exports = (app: Express) => {
  app.get("/api/vocabs", (req: Request, res: Response) => {
    res.send(vocabs);
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
