// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  let strUp = str.toUpperCase();
  for (let i = 0; i < strUp.length; i++) {
    for (let j = 0; j < strUp.length; j++) {
      if (i != j) {
        if (strUp[i] === strUp[j]) return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("holaA"));
console.log(isIsogram("MoOse"));
console.log(isIsogram("oO"));
console.log(isIsogram("abcde"));

console.log(isIsogram("isIsogram"));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("abart"));
console.log(isIsogram("ivan"));
console.log(isIsogram(""));
console.log(isIsogram("abA"));
console.log(isIsogram("aba"));
