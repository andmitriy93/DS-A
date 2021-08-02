/* 
  You're given an array of integers and an integer. Write a function that moves 
  all instances of that integer in the array to the end of the array and returns 
  the array.

  The function should perform this in place(i.e., it should mutate the input array) 
  and doesn't need to maintain the order of the other integers.

  INPUT:
  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove = 2

  OUTPUT:
  [1, 3, 4, 2, 2, 2, 2, 2]
*/

// Time O(nlogn) / Space O(1)
function moveElementToEnd(array, toMove) {
  array.sort((a, b) => a - b)
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] === toMove && array[end] !== toMove) {
      swap(start, end, array);
      start++;
      end--;
    } else if (array[start] === toMove && array[end] === toMove) {
      end--;
    } else if (array[start] !== toMove && array[end] === toMove) {
      end--;
    } else {
      start++;
    }
  }
  return array;
}

function swap(i, j, array) {
  let tmp = array[j];
  array[j] = array[i];
  array[i] = tmp;
}

// Time O(n) / Space O(1)
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}