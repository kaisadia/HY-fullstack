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

console.log(calculateBmi(58, 1.7));
