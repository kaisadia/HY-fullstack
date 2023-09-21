export const calculateBmi = (weight: number, height: number): String => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.4) {
    return "Underweight";
  } else if (bmi > 18.4 && bmi < 25) {
    return "Normal weight";
  } else if (bmi > 25) return "Overweight";
  else {
    return "Undefined";
  }
};

const weight: number = Number(process.argv[2]);
const height: number = Number(process.argv[3]);

console.log(calculateBmi(weight, height));
