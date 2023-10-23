// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  let xUpperCase = x.toUpperCase();

  if (xUpperCase === "" || xUpperCase.length === 1) return true;

  for (let index = 0; index < xUpperCase.length; index++) {
    if (xUpperCase[index] !== xUpperCase[xUpperCase.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

// Failurs
//length = 11

// Corrects
console.log(isPalindrome("AnitaLavalatin"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("carro"));
console.log(isPalindrome("abbar"));
console.log(isPalindrome("a"));
console.log(isPalindrome(""));
