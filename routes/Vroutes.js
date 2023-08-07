import Videos from "../model/dbModel.js";
import express from 'express';

const router = express.Router();

app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post("/posts", async (req, res) => {
  const dbVideos = new Videos(req.body);

  console.log(dbVideos);
  try {
    const savedVideo = await dbVideos.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    console.log(err);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const GetVideos = await Videos.find();
    res.status(200).js