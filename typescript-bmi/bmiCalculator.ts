const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.4 && bmi < 25) {
    return "Normal weight";
  } else if (bmi > 24.9 && bmi < 30) {
    return "Overweight";
  } else if (bmi > 30) return "Obese";
};

console.log(calculateBmi(190, 90));
