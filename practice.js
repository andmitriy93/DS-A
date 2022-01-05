// Linked List, Binary Tree, Sorting

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

  while (currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next
    } else {
			currentNode = currentNode.next	
		}
  }
  return linkedList
}

// // ll = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6




// Merge two linked lists

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
	let p1 = headOne
  let p2 = headTwo
  let prev = null;

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next
    } else {
      if (prev !== null) prev.next = p2
      prev = p2;
      p2 = p2.next;
      prev.next = p1
    }
  }
  if (p1 === null) prev.next = p2;

  return headOne.value < headTwo.value ? headOne : headTwo
}


// Reverse linked list 

function reverseLinkedList(head) {
  let currentNode = head;
  let previous = null;

  while (currentNode) {
    let tmp = currentNode.next;
    currentNode.next = previous;
    previous = currentNode
    currentNode = tmp;
  }

  return previous;
}


// Bubble sort

function bobbleSort(array) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let idx = 0; idx < array.length; idx++) {
      if (array[idx] > array[idx + 1]) {
        swap(idx, idx + 1, array)
        isSorted = false
      }
    }
  }

  return array
}

function swap(idx, idx2, array) {
  let tmp = array[idx2]
  array[idx2] = array[idx];
  array[idx] = tmp
}