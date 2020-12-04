//Most frequently used words in a text

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
//
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]
//
// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]
//
// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]


// helper hash map func
const charHash = array => {
  const hash = {};
  for (let char of array) {
    hash[char] ? hash[char]++ : hash[char] = 1
  }
  return hash
}

const findMax = hash => {
  const max = Math.max(...Object.values(hash))
  for (let char in hash) {
    if (hash[char] === max) return char
  }
}

const removeDuplicates = array => [...new Set(array)]


const topThreeWords = text => {
  const topThree = [];
  const arrOfChar = text.toLowerCase().split(/[^A-Z0-9']/ig).filter(char => char !== '')

  if (arrOfChar.length < 2) return arrOfChar[0] === '\'' ? [] : arrOfChar
  if (arrOfChar.length === 3) return removeDuplicates(arrOfChar).reverse()

  const textHash = charHash(arrOfChar);
  // what is this for loop doing???
  for (let i = 0; i < 3; i++) {
    const max = findMax(textHash);
    topThree.push(max)
    delete textHash[max]
  }
  return topThree
}
