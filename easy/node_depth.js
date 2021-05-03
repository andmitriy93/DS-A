/*
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and return the sum of its nodes depths.

Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null.

Input:
tree =      1
          /   \
         2    3
        / \  / \
      4   5 6   7
    /  \
   8   9

Output: 
16
The depth of the node with value 2 is 1.
The depth of the node with value 3 is 1.
The depth of the node with value 4 is 2.
The depth of the node with value 5 is 2.
etc.
Summing all of these depths yields 16.

*/

// Recursive
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.rigth, depth + 1)
}


// Itterative
// function nodeDepths(root) {
//   let sumOfDepts = 0;
//   const stack = [{node: root, depth: 0}];
//   while (stack.length > 0) {
//     const {node, depth} = stack.pop();
//     if (node === null) continue;
//     stack.push({node: node.left, depth: depth + 1});
//     stack.push({node: node.right, depth: depth + 1})
//   }
//   return sumOfDepts;
// }

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}