/*
Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three
largest integers in the input array.

The function should return duplicate integers if necessary: for exapmle, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

Input: 
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Output:
[18, 141, 541]

*/

function findThreeLargestNumbers(array) {
  let largestNumbers = [null, null, null]

  for (let num of array) {
    findTheLargestNumber(largestNumbers, num)
  }

  return largestNumbers
}

function findTheLargestNumber(largestNumbers, num) {
  if (largestNumbers[2] === null || num > largestNumbers[2]) {
    shiftNumbers(largestNumbers, num, 2)
  }
  if (largestNumbers[1] === null || num > largestNumbers[1]) {
    shiftNumbers(largestNumbers, num, 1)
  }
  if (largestNumbers[0] === null || num > largestNumbers[0]) {
    shiftNumbers(largestNumbers, num, 0)
  }
}

function shiftNumbers(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}