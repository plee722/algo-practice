// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.


function sumOfRoot(root) {
  let sum = [0]
  helper(root, "0", sum)

}

function helper(node, binStrPath, arr) {
  if (node) {
    if (!node.left && !node.right) {
      arr[0] += parseInt()
    }
  }
}
}
