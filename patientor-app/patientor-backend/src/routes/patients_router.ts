import express from "express";
import patientsService from "../services/patientsService";
import toNewPatientEntry from "../../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const patient = patientsService.getPatientById(id);
  res.send(patient);
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post("/:id/entries", (req, res) => {
  try {
    const patientId = req.params.id
    const newEntry = req.body;

    const patient = patientsService.getPatientById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' })
    }

    patient.entries.push(newEntry)

    res.status(201).json(patient);
    


  }
});

export default router;
