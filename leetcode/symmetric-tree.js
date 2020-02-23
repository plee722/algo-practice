// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// Passes 194/195 test cases on leetcode.

// function isSymmetric(root) {
//   let inOrderDFS = []

//   if (!root) {
//     return true
//   }

//   helper(inOrderDFS, root)
//   console.log(inOrderDFS)


//   let left = 0
//   let right = inOrderDFS.length - 1
//   while (left !== right) {
//     if (inOrderDFS[left] !== inOrderDFS[right]) {
//       return false
//     } else {
//       left++
//       right--
//     }
//   }
//   return true
// }

// function helper(arr, tree) {
//   if (tree.left) {
//     helper(arr, tree.left)
//   }
//   if (!tree.left && tree.right) {
//     arr.push(null)
//   }
//   arr.push(tree.val)
//   if (tree.right) {
//     helper(arr, tree.right)
//   }
//   if (tree.left && !tree.right) {
//     arr.push(null)
//   }
// }

// Recursive solution that passes all test cases
function isSymmetric(root) {
  if (root === null) {
    return true
  }
  return helper(root.left, root.right)
}

function helper(root1, root2) {
  if (root1 === null && root2 === null) {
    return true
  }
  if (root1 === null || root2 === null) {
    return false
  }
  if (root1.val === root2.val) {
    if (helper(root1.right, root2.left) && helper(root1.left, root2.right)) {
      return true
    }
  }
  return false
}
