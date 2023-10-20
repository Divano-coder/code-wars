// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  let palindromeArray = x.split("");
  let count = 0;
  for (let index = 0; index < palindromeArray.length; index++) {
    // console.log(index);
    if (palindromeArray[index] === palindromeArray[index.length]) {
      count++;
    }
  }

  console.log(count);

  return palindromeArray;
}

console.log(isPalindrome("hola"));
console.log(isPalindrome("ala"));
