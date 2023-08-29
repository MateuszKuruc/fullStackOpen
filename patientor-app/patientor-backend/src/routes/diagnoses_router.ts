import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetchin all diagnoses!");
});

router.post("/", (req, res) => {
  res.send("Saving a diagnosis!");
});

export default router;
