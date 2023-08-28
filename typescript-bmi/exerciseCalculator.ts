interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (data: number[], dailyTarget: number): Result => {
  const periodLength = data.length;
  const trainingDays = data.filter((d) => d !== 0).length;
  const target = dailyTarget;
  const allHours = data.reduce((sum, number) => {
    return sum + number;
  }, 0);
  const average = allHours / periodLength;
  const success = average > target ? true : false;
  let rating;
  if (periodLength === trainingDays) {
    rating = 3;
  } else if ((trainingDays / periodLength) * 100 > 80) {
    rating = 2;
  } else {
    rating = 1;
  }

  let ratingDescription;
  if (rating === 3) {
    ratingDescription = "very well done!";
  } else if (rating === 2) {
    ratingDescription = "not too bad!";
  } else {
    ratingDescription = "need to try harder!";
  }

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

// const data = [1, 2, 3, 4, 5];
// const allHours = data.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(allHours);

// const trainingDays = data.filter((d) => d !== 0).length;
// console.log(trainingDays);
