/*
  Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intevals, and 
  returns the new intervals in no particula order.

  Each interval interval is an array of two integers, with interval[0] as the start of the interval and 
  interval[1] as the end of the interval

  Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] 
  aren't overlapping: however, [1, 6] and [6, 7] are indeed overlapping.

  Also note that the start of any particular interval will always be less than or equal to the end of that interval

  INPUT:
  interval = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

  OUTPUT:
  [[1, 2], [3, 8], [9, 10]]
  Merge t he intervals [3, 5], [4, 7], and [6, 8]
  The intervals could be orderred differently

*/

// Time O(nlogn) / Space O(n)
function mergeOverlappingIntervals(array) {
  const sortedArray = array.sort((a, b) => a[0] - b[0])

  let result = [];
  let currentInterval = sortedArray[0];
  result.push(currentInterval)


  for (const nextInterval of sortedArray) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
    else {
      currentInterval = nextInterval;
      result.push(currentInterval)
    }
  }

  return result;
}

let interval = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
console.log(mergeOverlappingIntervals(interval))