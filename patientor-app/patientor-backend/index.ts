import express from "express";
import diagnosisRouter from "./src/routes/diagnoses_router";
import patientsRouter from "./src/routes/patients_router";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged");
  res.send("pooooong");
});

app.use("/api/diagnoses", diagnosisRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
