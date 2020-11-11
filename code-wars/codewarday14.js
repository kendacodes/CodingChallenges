// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer
//
//


const squareDigits = (num) => {
  // creating an array with the numbers (turning them into a string) and maping through the array and squaring each digit
  return parseInt(Array.from(num.toString()).map(Number).map(num => Math.pow(num, 2)).join(''))

}
