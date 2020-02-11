// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.


function sumOfRoot(root) {
  let binaryArr = []
  helper(root, "0", binaryArr)
  return binaryArr.reduce((acc, curr) => {
    return acc + parseInt(curr, 2)
  }, 0)
}

function helper(node, binStrPath, arr) {
  if (node) {
    if (!node.left && !node.right) {
      arr.push(binStrPath + node.val)
    } else {
      helper(node.left, binStrPath + node.val, arr)
      helper(node.right, binStrPath + node.val, arr)
    }
  }
}
