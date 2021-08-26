// function swap(arr, idx1, idx2) {
//   let tmp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = tmp
// }

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// function bubbleSort(array) {
//   for (let i = array.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (array[j] > array[j + 1]) swap(array, j, j+1)
//     }
//   }

//   return array;
// }

// Optimized solution
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 35, 29, 8])