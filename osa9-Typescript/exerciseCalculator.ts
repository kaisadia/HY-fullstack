interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  hours: number[],
  target: number
): ExerciseResult => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((hours) => hours > 0).length;
  const average = hours.reduce((acc, curr) => acc + curr, 0) / periodLength;
  const success = average >= target;

  let rating = 1;
  let ratingDescription = "not too bad but could be better";

  if (average < target - 0.5) {
    rating = 1;
    ratingDescription = "not good at all";
  } else if (average >= target - 0.5 && average < target) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 3;
    ratingDescription = "excellent";
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

const args: string[] = process.argv.slice(2);
const hours: number[] = args.map(Number);
const target: number = Number(process.argv[2]);

console.log(calculateExercises(hours, target));
