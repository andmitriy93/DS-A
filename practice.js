// Linked List, Binary Tree, Sorting

const { ImportsNotUsedAsValues } = require('typescript');

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
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
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
  let p1 = headOne;
  let p2 = headTwo;
  let prev = null;

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev !== null) prev.next = p2;
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (p1 === null) prev.next = p2;

  return headOne.value < headTwo.value ? headOne : headTwo;
}

// Reverse linked list

function reverseLinkedList(head) {
  let currentNode = head;
  let previous = null;

  while (currentNode) {
    let tmp = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
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
        swap(idx, idx + 1, array);
        isSorted = false;
      }
    }
  }

  return array;
}

function swap(idx, idx2, array) {
  let tmp = array[idx2];
  array[idx2] = array[idx];
  array[idx] = tmp;
}

// Quicksort

function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// Merge sort

function mergeSort(array) {
  if (array.length <= 1) return array;

  const midIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midIdx);
  const rightHalf = array.slice(midIdx);

  return mergeHelper(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeHelper(leftHalf, rightHalf) {
  let result = new Array(leftHalf.length + rightHalf.length);
  let k = 0;
  let j = 0;
  let i = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      result[k++] = leftHalf[i++];
    } else {
      result[k++] = rightHalf[j++];
    }
  }

  while (i < leftHalf.length) {
    result[k++] = leftHalf[i++];
  }

  while (j < rightHalf.length) {
    result[k++] = rightHalf[j++];
  }

  return result;
}

// Binary Search

function binarySearch(array, target) {
  return helperFunction(array, target, 0, array.length - 1);
}

function helperFunction(array, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (target > array[mid]) {
    helperFunction(array, target, mid + 1, end);
  } else if (target < array[mid]) {
    helperFunction(array, target, mid - 1, start);
  } else {
    return mid;
  }
}

// Depth first
// Iteratively
function depthFirst(root) {
  if (root === null) return [];
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.value);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
  return result;
}

// breadfirst

function breadFirst(root) {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
}

// Tree includes
const treeIncludes = (root, target) => {
  if (root === null) return false;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

const treeSum = (root) => {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right)
}

// Binary Tree Diameter

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter
}

function getTreeInfo(tree) {
  if (!tree) return new TreeInfo(0, 0)

  const leftInfo = getTreeInfo(tree.left)
  const rightInfo = getTreeInfo(tree.right)

  const longestPath = leftInfo.height + rightInfo.height;
  const maxDiameterSoFar = Math.max(leftInfo.diameter, rightInfo.diameter)
  const currentDiameter = Math.max(longestPath, maxDiameterSoFar)
  const currentHeight = 1 + Math.max(leftInfo.height, rightInfo.height)

  return new TreeInfo(currentDiameter, currentHeight)
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height
  }
}