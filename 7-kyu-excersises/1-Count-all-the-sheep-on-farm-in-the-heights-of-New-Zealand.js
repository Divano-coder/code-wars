// DESCRIPTION:
// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

// Good luck! :-)

function lostSheep(friday, saturday, total) {
  let sheepReturnedonFriday = 0;
  let sheepReturnedOnSaturday = 0;
  friday.map((s) => (sheepReturnedonFriday += s));
  saturday.map((s) => (sheepReturnedOnSaturday += s));
  return total - sheepReturnedonFriday - sheepReturnedOnSaturday;
}

console.log(lostSheep([5, 1, 4], [5, 4], 29));
console.log(lostSheep([1, 2], [3, 4], 15));
console.log(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300));
console.log(lostSheep([], [], 15));
console.log(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89));
