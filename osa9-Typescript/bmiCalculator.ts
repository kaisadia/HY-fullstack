const calculateBmi = (weight: number, height: number): String => {
  if (weight / (height * height) < 18.4) {
    return "Underweight";
  } else if (
    weight / (height * height) > 18.4 &&
    weight / (height * height) < 25
  ) {
    return "Normal weight";
  } else if (weight / (height * height) > 25) return "Overweigth";
};

const weight: number = Number(process.argv[2]);
const height: number = Number(process.argv[3]);

console.log(calculateBmi(weight, height));
