/*
  ??Insert Pseudocode for Max binary heap
  1. PUsh the value into the values property on the heap
  2. Bubble up:
    -) Create a variable called index which is the length of the values property - 1
    -) Create a variable called parentIndex which is the floor of (index - 1) / 2
    -) Keep looping as long as the values element at the parentIndex is less than values element 
      at the child index
      * Swap the values of the values element at the parentIndex with the value of the element 
        property at the child index
      * Set the index to be the parentIndex, and start over!

*/


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent
      idx = parentIdx;
    }
  }

}

let heap = new MaxBinaryHeap();
heap.insert(55);

