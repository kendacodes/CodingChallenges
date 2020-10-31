// ARRAY PLUS ARRAY

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  //reduce method takes in a callback function and a value
let sum1= arr1.reduce(function(a, b){
                      return a+b
                      }, 0 )
let sum2 = arr2.reduce(function(a, b){
        return a + b;
    }, 0);

  return sum1 + sum2
}
