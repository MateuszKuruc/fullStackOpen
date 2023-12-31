import express from "express";
import diagnosisRouter from "./src/routes/diagnoses_router";
import patientsRouter from "./src/routes/patients_router";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
import cors from "cors";

app.use(express.json());
app.use(cors());

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
