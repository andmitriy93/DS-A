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

  insert(value) {

  }

  contains(value) {

  }


  remove(value) {}



}