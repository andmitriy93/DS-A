/*
Bubble Sort
Write a function that takes in an array of integers and reeturns a sorted version of that array. Use the Bubble Sort algorithm to sort 
the array

Input: 
array = [8, 5, 2, 9, 5, 6, 3]

Outpu:
[2, 3, 5, 5, 6, 8, 9]

*/

function bubbleSort(array) {
  let isSorted = false
  let counter = 0

  while (!isSorted) {
    isSorted = true
    for (let idx = 0; idx < array.length - 1 - counter; idx++) {
      if (arrya[idx] > array[idx + 1]) {
        swap(idx, idx + 1, array)
        isSorted = false
      }
    }
    counter++
  }
  return array
}

function swap(i, j, array) {
  let tmp = array[j]
  array[j] = array[i]
  array[i] = tmp
}

