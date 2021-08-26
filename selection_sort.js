// ? First find the minimum value in the array and then swap it with first element
// * Time O(n^2)

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if (i !== lowest) swap(arr, lowest, i)
  }

  return arr;
}

selectionSort([35, 22, 10, 19, 17])