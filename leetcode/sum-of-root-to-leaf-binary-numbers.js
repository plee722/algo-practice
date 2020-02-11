// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.


function sumOfRoot(root) {
  let binaryArr = [0]
  helper(root, "0", binaryArr)
  return binaryArr[0]
}

function helper(node, binStrPath, arr) {
  if (node) {
    if (!node.left && !node.right) {
      arr[0] += parseInt(binStrPath + node.val, 2)
    } else {
      helper(node.left, binStrPath + node.val, arr)
      helper(node.right, binStrPath + node.val, arr)
    }
  }
}
