/*
Write a funciton that takes in an array of integers and returns a sortetd version of taht array.
Use the Selection Sort algorithm to sort the array

Input:
array = [8, 5, 2, 9, 5, 6, 3]

Output: 
[2, 3, 5, 5, 6, 8, 9]
*/

function selectionSort(array) {
  let currentIdx = 0;

  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i 
    }
    swap(currentidx, smallestIdx, array) 
    currentIdx++
  }

  return array
}

function swap(i, j, array) {
  let tmp = array[j]
  array[j] = array[i]
  array[i] = tmp;
}

