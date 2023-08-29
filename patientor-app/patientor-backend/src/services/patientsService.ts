import patientsData from "../../data/patients";
// import { PatientEntry } from "../../types";
import { NonSensitivePatientEntry } from "../../types";

// const patients: PatientEntry[] = patientsData;
// const patients = patientsData;

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensitiveEntries,
};
