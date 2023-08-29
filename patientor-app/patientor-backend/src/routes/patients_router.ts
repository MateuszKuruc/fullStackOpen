import express from "express";
// import { PatientEntry } from "../../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching patients data!");
});

export default router;
