import patientsData from "../../data/patients";
import {
  NonSensitivePatientEntry,
  PatientEntry,
  NewPatientEntry,
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

// const addEntry = (entry: Entry, patientId: string): Entry => {
//   const id = uuid();
//   const newEntryWithId = { ...entry, id };
//   const patient = getPatientById(patientId);
//   if (patient) {
//     patient.entries.push(newEntryWithId);
//     return patient;
//   }
//   return newEntryWithId;
// };

export default {
  getNonSensitiveEntries,
  addPatient,
  getPatientById,
};
