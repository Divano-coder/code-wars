// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let positive = 0;
  arr.map((n) => {
    if (n >= 0) {
      positive += n;
    }
  });
  return positive;
}

console.log(positiveSum([0, -2, 3, 4, 5]));
console.log(positiveSum([0, -2, 3, 4, -5]));
console.log(positiveSum([9, 2, -3, 4, 5]));
console.log(positiveSum([0, 1]));
console.log(positiveSum([0, -1]));
console.log(positiveSum([]));
