import {
  NewPatientEntry,
  Gender,
  EntryWithoutId,
  DiagnosesEntry,
} from "./types";

const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseString = (value: unknown, what: string): string => {
  if (isString(value)) {
    return value;
  }
  throw new Error(`Value of ${what} incorrect: ${value}`);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }

  return name;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }

  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn");
  }

  return ssn;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing occupation");
  }

  return occupation;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender:" + gender);
  }
  return gender;
};

const parseDiagnosisCodes = (
  object: unknown
): Array<DiagnosesEntry["code"]> => {
  if (!object || typeof object !== "object" || !("diagnosisCodes" in object)) {
    return [] as Array<DiagnosesEntry["code"]>;
  }

  return object.diagnosisCodes as Array<DiagnosesEntry["code"]>;
};

type DischargeType = {
  date: string;
  criteria: string;
};

const parseDischarge = (object: unknown): DischargeType | undefined => {
  if (!object || typeof object !== "object" || !("discharge" in object)) {
    return undefined;
  }

  const discharege = object.discharge;

  if (!discharege || typeof discharege !== "object")
    throw new Error("invalid discharge");
  if (
    !("date" in discharege) ||
    !isString(discharege.date) ||
    !isDate(discharege.date)
  ) {
    throw new Error("discharge date missing or wrong type");
  }

  if (!("criteria" in discharege) || !isString(discharege.criteria)) {
    throw new Error("discharge criteria missing or wrong type");
  }

  return {
    date: discharege.date,
    criteria: discharege.criteria,
  };
};

type SickLeaveType = {
  startDate: string;
  endDate: string;
};

const parseSickLeave = (object: unknown): SickLeaveType | undefined => {
  if (!object || typeof object !== "object" || !("sickLeave" in object)) {
    return undefined;
  }

  const siclLeave = object.sickLeave;

  if (!siclLeave || typeof siclLeave !== "object")
    throw new Error("invalid siclLeave");
  if (
    !("startDate" in siclLeave) ||
    !isString(siclLeave.startDate) ||
    !isDate(siclLeave.startDate)
  ) {
    throw new Error("sickLeave startDate missing or wrong type");
  }
  if (
    !("endDate" in siclLeave) ||
    !isString(siclLeave.endDate) ||
    !isDate(siclLeave.endDate)
  ) {
    throw new Error("sickLeave endDate missing or wrong type");
  }

  return {
    startDate: siclLeave.startDate,
    endDate: siclLeave.endDate,
  };
};

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries: [],
    };
    return newEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
};

const parseHealthCheckRating = (
  value: unknown,
  what: string
): 0 | 1 | 2 | 3 => {
  if (
    isNumber(value) &&
    (value === 0 || value === 1 || value === 2 || value === 3)
  ) {
    return value;
  }
  throw new Error(`Value of ${what} incorrect: ${value}`);
};

export const parseEntry = (object: unknown): EntryWithoutId => {
  if (!object || typeof object !== "object") {
    throw new Error("Data missing or in wrong format");
  }

  if (!("type" in object)) throw new Error("type missing");
  if (!("date" in object)) throw new Error("date missing");
  if (!("specialist" in object)) throw new Error("specialist missing");
  if (!("description" in object)) throw new Error("description missing");

  const common = {
    date: parseDate(object.date),
    specialist: parseString(object.specialist, "specialist"),
    description: parseString(object.description, "description"),
    diagnosisCodes: parseDiagnosisCodes(object),
  };

  if (object.type === "HealthCheck") {
    if (!("healthCheckRating" in object))
      throw new Error("healthCheckRating missing");
    return {
      ...common,
      type: "HealthCheck",
      healthCheckRating: parseHealthCheckRating(
        object.healthCheckRating,
        "healthCheckRating"
      ),
    };
  } else if (object.type === "OccupationalHealthcare") {
    if (!("employerName" in object)) throw new Error("employerName missing");
    return {
      ...common,
      type: "OccupationalHealthcare",
      employerName: parseString(object.employerName, "employerName"),
      sickLeave: parseSickLeave(object),
    };
  } else if (object.type === "Hospital") {
    return {
      ...common,
      type: "Hospital",
      discharge: parseDischarge(object)!,
    };
  }

  throw new Error(`Incorrect type: ${object.type}`);
};

export default toNewPatientEntry;
