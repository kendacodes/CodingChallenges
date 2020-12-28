// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


const stray = numbers => {
  let cur = numbers[0];
  if (cur !== numbers[1] && cur !== numbers[2]) return cur;

  for (let i = 0; i < numbers.length; i++) {
    if (cur !== numbers[i]) {
      return cur = numbers[i]
    }

  }
}
