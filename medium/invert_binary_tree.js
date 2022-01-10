/*

  Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its 
  corresponding right node.

  Each BinaryTree node has as integer 'value', a 'left' child node, and a 'right' child node. Children nodes can either be 
  BinaryTree nodes themselves or 'None'/null

  Input:
  tree =      1
            /  \
           2    3
          / \   /  \
        4   5   6  7
      /  \
     8    9


     Output:

              1
            /   \
          3      2
        /  \    /  \
       7   6   5    4
                   /  \
                   9   8
     
*/
// Recursively
function invertBinaryTree(tree) {
  if (!tree) return;
  swapLeftToRight(tree);
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

function swapLeftToRight(tree) {
  let left = tree.left;
  this.left = this.right;
  this.right = left
}

// Iteratively
function invertBinaryTree(tree) {
  let queue = [tree]
  while (queue.length) {
    let current = queue.shift();
    if (current === null) continue;
    swapLeftToRight(current)
    queue.push(current.left)
    queue.push(current.right)
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}