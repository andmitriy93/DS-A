/* 
  Write a function that takes in an array of integers and returns a boolean representing whter the array 
  is monotonic.

  An array is said to be monotinic if its elements, from left to right, are entirely non-incereasing or 
  entirely non-decresing.

  Non-increasing elements aren't necessarily exlusively decreasing: they simply don't increase. Similarly,
  non-decreasing elements aren't necessarily exclusively increasing: they simply don't decrease.

  Note that empty arrays and arrays of one element are monotonic.

  INPUT:
  array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
  OUTPUT:
  true
*/

// Time O(n) / Space O(1)
function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = true;
  }
  return isNonDecreasing || isNonIncreasing
}

// Time O(n) / Space O(1)
function isMonotonic(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1]
      continue;
    }
    if (breakDirection(direction, array[i - 1], array[i])) return false
  }
  return true;
}

function breakDirection(direction, prevNum, currentNum) {
  const difference = currentNum - prevNum;
  if (direction > 0) return difference < 0
  return difference > 0
}