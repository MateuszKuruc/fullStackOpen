import express from "express";
import { calculateBmi, Assessment } from "./bmiCalculator";
import { calculateExercises, Result } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmiResult: Assessment = calculateBmi(height, weight);

  const response = {
    weight,
    height,
    bmiResult,
  };

  return res.json(response);
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (
    isNaN(target) ||
    !Array.isArray(daily_exercises) ||
    !daily_exercises.every((elem) => !isNaN(elem))
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  } else if (typeof target === undefined || !Array.isArray(daily_exercises)) {
    return res.status(400).json({ error: "parameters missing" });
  }

  const result: Result = calculateExercises(daily_exercises, target);
  return res.send({ result });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
