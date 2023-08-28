interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (data: [], dailyTarget: number) => {
  const periodLength = data.length;
  const trainingDays = data.filter((d) => d !== 0).length;
  const targetValue = dailyTarget;
  const allHours = data.reduce((sum, number) => {
    return sum + number;
  }, 0);
  const averageHours = allHours / periodLength;
};

const data = [1, 2, 3, 4, 5];
// const allHours = data.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(allHours);

// const trainingDays = data.filter((d) => d !== 0).length;
// console.log(trainingDays);
