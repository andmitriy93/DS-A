// Breadth-first Search(BFS)
// Depth-first Search(DFS)

//BFS Pseudo Code
/*
  Steps iteratively:
  1. Create a queue (this can be an array) and variable to store the values of nodes visited
  2. Place the root node in the queue
  3. Loop as long as there is anything in the queue:
    a. Dequeue a node from the queue and push the value of the node int othe variable that stores the nodes
    b. if there is a lofet property on the node dequeueed - add it to the queue
    c. if there is a right property on the node dequeued - add it to the queue
  4. Return the variable that stores the values
*/

//DFS Pseudo Code
/*
  Steps - Recursively
  1. Create a variable to store the values of nodes visited
  2. Store the root of the BST in a variable called current
  3. Write a helper function which acceptes a node
    a. Push the value of the node to the variable that stores the values
    b. If the node has a left property, call the helper function with the left property on the node
    c. if the node has a right property, call the helper function with the right property on the node
  4. Invoke the helper function with the current variable
  5. Return the array of values

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    if (value === current.value) return undefined;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }


  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data;
  }

  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(this.root)
    return data;
  }

  dfsInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
}

//             10
//        6         16
//     3    8         20


let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree.bfs())
// console.log(tree.dfsPostOrder());
// console.log(tree.dfsPreOrder());
console.log(tree.dfsInOrder());
