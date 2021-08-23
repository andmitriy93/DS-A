function linearSearch(array, target) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      index = i;
      return index;
    }
  }
  return -1;
}