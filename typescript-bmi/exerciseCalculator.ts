export interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (data: number[], dailyTarget: number): Result => {
  const periodLength = data.length;
  const trainingDays = data.filter((d) => d !== 0).length;
  const target = dailyTarget;
  const average =
    data.reduce((sum, number) => {
      return sum + number;
    }, 0) / periodLength;
  const success = average > target ? true : false;

  const rating =
    periodLength === trainingDays
      ? 3
      : (trainingDays / periodLength) * 100 > 80
      ? 2
      : 1;

  const ratingDescriptions = {
    3: "very well done!",
    2: "not too bad!",
    1: "need to try harder!",
  };

  const ratingDescription = ratingDescriptions[rating];

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const inputHours: number[] = process.argv.slice(2).map((n) => Number(n));
const targetInfo: number = Number(process.argv[process.argv.length - 1]);

if (inputHours.length < 1 || isNaN(targetInfo)) {
  console.log(
    "Invalid input. Please provide valid numbers for hours and target"
  );
} else {
  console.log(calculateExercises(inputHours, targetInfo));
}
