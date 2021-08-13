/*
  You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where 
  each node in the linked List is a digit of that integer, and the first node in each Linked List always represents 
  the least significant digit of the integer. Write a function that return the head of a new Linked List that represents 
  the sum of the integers represented by the two input Linked Lists.

  Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null 
  if it's the tails of the list. The value of each LinkedList node is always in the range of 0-9

  Note: your functoin must create and return a new Linked List, and you're not allowed to modify either of the input 
  Linked Lists.

  INPUT:
  linkedListOne = 2 -> 4 -> 7 -> 1
  linkedListTwo = 9 -> 4 -> 5

  OUTPUT:
  1 -> 9 -> 2 -> 2
  linkedListOne represents 1742
  linkedListTwo represents 549
  1742 + 549 = 2291

*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumofLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedListPointer = new LinkedList(0)
  let currentNode = newLinkedListPointer;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;

  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    let valueOne = nodeOne !== null ? nodeOne.value : 0;
    let valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    let sumValues = valueOne + valueTwo + carry;

    let newValue = sumValues % 10;
    let newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sumValues / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null
  }

  return newLinkedListPointer.next
}