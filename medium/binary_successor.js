/*

  Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as wee as a node contained in 
  that tree and returns the given successor.

  A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree - 
  traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal.

  If a node has no successor, your function should return None / null.

  Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. Children nodes can 
  either be BinaryTree nodes themselves or None/null.

  Input:

  tree =        1
              /   \
            2     3
           / \ 
         4    5
       /
      6
  
  node = 5;


  OUTPUT:  1
  This tree's in-order traverse order is: 
  6 -> 4 -> 2 -> 5 -> 1 -> 3
  1 comes immediately after 5

*/

class BinaryTryy {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Time O(n) / Space O(n)
function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);

  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const currentNode = inOrderTraversalOrder[idx];
    if (currentNode !== node) continue;

    if (idx === inOrderTraversalOrder.length - 1) return null;

    return inOrderTraversalOrder[idx + 1]
  }
}

function getInOrderTraversalOrder(node, order=[]) {
  if (node === null) return order;

  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);

  return order;
}