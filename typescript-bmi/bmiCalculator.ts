const calculateBmi = (height: number, weight: number): number => {
  return weight / ((height / 100) * (height / 100));
};

console.log(calculateBmi(190, 90));
