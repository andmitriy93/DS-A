// Linked List, Binary Tree, Sorting

// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function removeDuplicatesFromLinkedList(linkedList) {
//   let currentNode = linkedList;

//   while (currentNode.next !== null) {
//     if (currentNode.value === currentNode.next.value) {
//       currentNode.next = currentNode.next.next
//     } else {
// 			currentNode = currentNode.next	
// 		}
//   }
//   return linkedList
// }

// // ll = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6

// let ll = new LinkedList({
//   head: '1',
//   nodes: [
//     { id: '1', next: '1-2', value: 1 },
//     { id: '1-2', next: '1-3', value: 1 },
//     { id: '1-3', next: '2', value: 1 },
//     { id: '2', next: '3', value: 3 },
//     { id: '3', next: '3-2', value: 4 },
//     { id: '3-2', next: '3-3', value: 4 },
//     { id: '3-3', next: '4', value: 4 },
//     { id: '4', next: '5', value: 5 },
//     { id: '5', next: '5-2', value: 6 },
//     { id: '5-2', next: null, value: 6 },
//   ],
// });


// removeDupFromLinkedList(ll);



class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
	
}