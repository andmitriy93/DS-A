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

    if (value === current.value) return undefined;
    let current = this.root;
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

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
        found = false;
    
    while(current && !found) {
      if (value < current.value){
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }
}

//             10
//        5         13
//     2    7   11    16


let tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7)
tree.root.left.right(9) = new Node(9)