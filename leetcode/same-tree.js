// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

test1 = [[1, 2, 3], [1, 2, 3]]
// Output = true

test2 = [[1, 2], [1, null, 2]]
// Output = false

test3 = [[1, 2, 1], [1, 1, 2]]
// Output = false

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isSameTree(p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  let arr1 = []
  traverse(p, arr1)
  let arr2 = []
  traverse(q, arr2)
  console.log('length 1', arr1.length)
  console.log('length 2', arr2.length)
  if (arr1.length !== arr2.length) return false
  let idx = 0
  while (idx !== arr1.length) {
    if (arr1[idx] !== arr2[idx]) return false
    idx++
  }
  return true
};

function traverse(tree, array) {
  if (tree.left === null) array.push(null)
  if (tree.right === null) array.push(null)
  if (tree.left) traverse(tree.left, array)
  array.push(tree.val)
  if (tree.right) traverse(tree.right, array)
}
