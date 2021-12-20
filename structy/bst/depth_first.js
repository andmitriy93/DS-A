class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Iteratively
  depthFirst(root) {
    if (root === null) return []
    const result = []
    const stack = [root]
    
    while (stack.length > 0) {
      const currentNode = stack.pop();
      result.push(currentNode.value)

      if (currentNode.right) stack.push(currentNode.right)
      if (currentNode.left) stack.push(currentNode.left)

    }
    
    return result
  }

  // Recursively
  depthFirstRecursive(root) {
    if (root === null) return []

    const leftValues = this.depthFirstRecursive(root.left)
    const rightValues = this.depthFirstRecursive(root.right)
    
    return [root.value, ...leftValues, ...rightValues]
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;