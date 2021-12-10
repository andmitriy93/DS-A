/*
  Write a BST class for a Binary Search Tree. The class should support:
    - inserting values with the insert method.
    - Removing values with the remove method; this method should only remove the first instance of a given value.
    - Searching for values with the contains method.

  Note that you can't remove values from a single-node tree. In other words, calling the 'remove' method on a single-node tree should 
  simply not do anything.

  Each BST node has an integer 'value', a 'left' child node, and a 'right' child node. A node is said to be a valid BST node if and 
  only if it satisfies the BST property: its 'value' is strictly greate than the values of every node to its left; its 'value' is less 
  or equal to the values of every node to its right: and its children nodes are either valid BSt nodes themselves or None/ null.


                10
              /    \
            5      15
          /  \    /  \
        2    5   13  22
      /           \
    1             14 


*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Recursively
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  // Iteratively
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  // Recursively
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false
      } else {
        return this.right.contains(value)
      }
    } else {
      return true;
    }
  }

  // Iteratively
  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Recursively
  remove(value, parent = null) {

  }

  // Iteratively
  remove(value, parentNode = null) {
    let currentNode = this;
    // console.log('currentNode: ', currentNode);
    // console.log('parentNode: ', parentNode);
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.left = currentNode.left.left;
            currentNode.right = currentNode.left.right
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single node tree; do nothing
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value;
  }

}

const bst = new BST(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(5)
bst.insert(1)
bst.insert(13)
bst.insert(22)
bst.insert(12)
bst.insert(14)

bst.remove(10)
console.log(bst);

