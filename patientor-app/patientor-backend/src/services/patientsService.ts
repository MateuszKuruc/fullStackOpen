import patientsData from "../../data/patients";
// import { PatientEntry } from "../../types";
import { NonSensitivePatientEntry } from "../../types";

// const patients: PatientEntry[] = patientsData;
// const patients = patientsData;

const getEntries = (): NonSensitivePatientEntry[] => {
  return patientsData;
};

export default {
  getEntries,
};
