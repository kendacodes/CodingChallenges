//Vowel Count

// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


const getCount = (str) => {
  let regex =/["a","e","i","o","u"]/g;
  let found = str.match(regex);
  let vowelsCount = found ? found.length : 0;

  return vowelsCount;
}

 //// OPTIMIZED:   
const getCount = (str) => {
  return (str.match(/[aeiou]/ig)||[]).length;
}
