import patientsData from "../../data/patients";
import {
  NonSensitivePatientEntry,
  PatientEntry,
  NewPatientEntry,
  EntryWithoutId,
} from "../../types";
import { v1 as uuid } from "uuid";

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientById = (id: string) => {
  const patient = patientsData.find((p) => p.id === id);
  return patient;
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };
  console.log(newPatientEntry);
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

const addEntry = (
  id: string,
  newEntry: EntryWithoutId
): PatientEntry | undefined => {
  const patient = patientsData.find((p) => p.id === id);
  console.log(newEntry);

  if (patient) {
    const entry = {
      ...newEntry,
      id: uuid(),
    };
    patient.entries = patient.entries.concat(entry);
  }

  return patient;
};

export default {
  getNonSensitiveEntries,
  addPatient,
  getPatientById,
  addEntry,
};
