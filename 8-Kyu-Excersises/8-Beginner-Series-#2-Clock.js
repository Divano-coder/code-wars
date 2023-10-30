// kata #8

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// Equivalences:
// 1 h = 3,600,000 ms
// 1 m = 60,000 ms
// 1 s = 1,000 ms

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));
