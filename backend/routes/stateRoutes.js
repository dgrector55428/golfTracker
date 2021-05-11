import express from "express";
const router = express.Router();
import States from "../models/stateModel.js";

router.get("/", async (req, res) => {
  const states = await States.find({});

  res.json(states);
});

router.get("/:id", async (req, res) => {
  console.log(States);
  const state = await States.find((p) => p._id === req.params.id);
  res.json(state);
});

export default router;
