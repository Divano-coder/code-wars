// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi > 30) return "Obese";
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30.0) return "Overweight";
}

console.log(bmi(50, 1.5));
console.log(bmi(80, 1.8));
console.log(bmi(90, 1.8));
console.log(bmi(60, 1.75));
console.log(bmi(70, 1.6));
console.log(bmi(100, 1.8));
