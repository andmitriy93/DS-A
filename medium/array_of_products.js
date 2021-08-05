/* 
  Write a function that takes in a non-empty array of integers and returns an array of the same length, 
  where each element in the output array is equal to the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of every number in the input array 
  other tha input[i].

  Note that you're  expected to solve this problem without using division.

INPUT:
  array = [5, 1, 4, 2]

OUTPUT:
  [8, 40, 10, 20]
  8 is equal to 1 x 4 x 2
  40 is equal to 5 x 4 x 2
  10 is equal to 5 x 1 x 2
  20 is equal to 5 x 1 x 4
*/

// Will be 3 different ways to solve this problem

// 1 Way Time O(n^2) / Space O(n)
function arrayOfProducts(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      runningProduct *= array[j]
    }
    result.push(runningProduct)
  }

  return result;
}

// 2 Way Time O(n) / Space O(n)
function arrayOfProducts(array) {
  let result = new Array(array.length).fill(1)
  let leftProducts = new Array(array.length).fill(1)
  let rightProducts = new Array(array.length).fill(1)

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i]
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i]
  }

  for (let i = 0; i < array.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i]
  }

  return result
}


// 3 Way Time O(n) / Space O(n)
function arrayOfProducts(array) {
  let result = new Array(array.length).fill(1)

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = leftRunningProduct;
    leftRunningProduct *= array[i]
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    result[i] *= rightRunningProduct;
    rightRunningProduct *= array[i]
  }
  
  return result
}




let array = [5, 1, 4, 2]
console.log(arrayOfProducts(array))