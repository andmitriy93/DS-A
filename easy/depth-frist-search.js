/*
You're givien a Node class that has a name and an array of optional children nodes. When put
together, nodes form and acyclic tree-like structure.

Implement the depthFirstSearch mehtod on the NOde class, which takes in an empty array,
traverse the tree using the Depth-first Search approach(specifically navigating the tree from left to 
right), stores all of the nodes names in the input array, and returns it.

Input:
graph =         A
              /  |  \
             B   C  D
            / \    / \
           E  F   G   H
             / \   \
            I   J   K


Output:
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}