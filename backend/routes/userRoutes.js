import express from "express";
const router = express.Router();
import Users from "../models/userModel.js";

router.get("/", async (req, res) => {
  const users = await Users.find({});

  res.json(users);
});

router.get("/:id", async (req, res) => {
  console.log(Users);
  const user = await Users.find((p) => p._id === req.params.id);
  res.json(user);
});

export default router;
