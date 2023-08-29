import patientsData from "../../data/patients";
import { PatientEntry } from "../../types";

const patients: PatientEntry[] = patientsData;

const getEntries = () => {
  return patients;
};

export default {
  getEntries,
};
