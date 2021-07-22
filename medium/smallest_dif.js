/*
  Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) 
  whose absolute diffrenece is closest to zero, and return an array containing these two numbers, with the 
  number from the first array in the first position.

  Note that the absolute diffrence of two integers is the distance between them on the real number line. 
  For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -5 is 1

  You can assume that there will only be one pair of numbers with the smallest difference.

  INPUT:
  arrayOne = [-1, 5, 10, 20, 28, 3]
  arrayTwo = [26, 134, 135, 15, 17]

  OUTPUT:
  [28, 26]
*/


// Time O(nlogn + mlogm) / Space O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let smallestDif = Infinity;
  let currentDif = Infinity;
  let idxOne = 0;
  let idxTwo = 0;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne]
    let secondNum = arrayTwo[idxTwo]

    if (firstNum < secondNum) {
      currentDif = secondNum - firstNum;
      idxOne++
    } else if (firstNum > secondNum) {
      currentDif = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum]
    }

    if (smallestDif > currentDif) {
      smallestDif = currentDif;
      smallestPair = [firstNum, secondNum]
    }
  }
  
  return smallestPair;
}