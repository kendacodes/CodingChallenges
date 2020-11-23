// Simple Fun #253: Cool String

// Task
// Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.
//
// Input/Output
// [input] string s
//
// A string that contains uppercase letters, lowercase letters numbers and spaces.
//
// 1 ≤ s.length ≤ 20.
//
// [output] a boolean value
//
// true if s is cool, false otherwise.
//
// Example
// For s = "aQwFdA", the output should be true
//
// For s = "aBC", the output should be false;
//
// For s = "AaA", the output should be true;
//
// For s = "q q", the output should be false.

const coolString = (s) => {
  //coding and coding..


  for (let i = 0; i < s.length - 1; i++) {
    let currentLetter = s[i];
    let nextLetter = s[i + 1];

    if (currentLetter === currentLetter.toUpperCase() && nextLetter === nextLetter.toUpperCase()) {
      return false;
    }
    if (currentLetter === currentLetter.toLowerCase() && nextLetter === nextLetter.toLowerCase()) {
      return false;
    }
    if (currentLetter === nextLetter) {
      return false;
    }
    if (currentLetter === ' ') {
      return false;
    }

  }
  if (isNaN(s)) {
    return true;
  } else {
    return false;
  }

}
