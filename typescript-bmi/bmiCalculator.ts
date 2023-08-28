export type Assessment =
  | "Underweight"
  | "Normal weight"
  | "Overweight"
  | "Obese";

const calculateBmi = (height: number, weight: number): Assessment => {
  const bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }

  throw new Error("Unhandled BMI condition");
};

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

if (!isNaN(height) || !isNaN(weight)) {
  console.log(calculateBmi(height, weight));
} else {
  console.log("Invalid input. Please use numbers for height and weight.");
}

export { calculateBmi };
