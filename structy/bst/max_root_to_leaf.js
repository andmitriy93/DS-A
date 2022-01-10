const maxRootToLeaf = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val

  const maxChild = Math.max(maxRootToLeaf(root.left), maxRootToLeaf(root.right));

  return root.val + maxChild;
}