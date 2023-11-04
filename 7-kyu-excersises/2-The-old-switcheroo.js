// I FINISH THE PROBLEM YOU JUST NEED TO UPLOAD THE SOLUTION...
// CHANGING TO 01 INSTEAD OF 1, 03 INSTEAD OF 3...

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

function vowel2index(str) {
  let vowel2index = "";
  let index = 1;
  for (const iterator of str) {
    if (
      iterator === "a" ||
      iterator === "e" ||
      iterator === "i" ||
      iterator === "o" ||
      iterator === "u" ||
      iterator === "A" ||
      iterator === "E" ||
      iterator === "I" ||
      iterator === "O" ||
      iterator === "U"
    ) {
      vowel2index += index;
    } else {
      vowel2index += iterator;
    }
    index++;
  }
  return vowel2index;
}

console.log(vowel2index("Hola"));
console.log(vowel2index("This is the best!"));
console.log(vowel2index("hola soy ivan"));
console.log(vowel2index("Tomorrow is going to be raining"));
console.log(vowel2index(""));
console.log(vowel2index("90's &;  s soy"));
