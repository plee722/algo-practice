//Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of all values in a Binary Tree branch.


class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function branchSums(node, results = [], sum = 0) {
  if (!node) {
    return
  }
  sum += node.val
  if (node.left) {
    branchSums(node.left, results, sum)
  }
  if (node.right) {
    branchSums(node.right, results, sum)
  }
  results.push(sum)
  return results
}

const tree1 = new BinaryTree(1)
branchSums(1)
