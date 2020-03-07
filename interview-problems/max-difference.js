// Given an array of integers, nums, return the maximum difference between any element and any smaller, lower indexed element. In other words, return the maximum difference for nums[j] - num[i] when i < j and nums[i] < nums[j]. Return -1 if there is not a pair that satifies this condition.

function maxDifference(nums) {
  let minNum = nums[0]
  let maxDiff = 0

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    if (num - minNum > maxDiff) {
      maxDiff = num - minNum
    }
    if (num < minNum) {
      minNum = num
    }
  }

  if (maxDiff === 0) {
    return -1
  } else {
    return maxDiff
  }
}

let test1 = [7, 1, 2, 5]
let test2 = [7, 5, 3, 1]
let test3 = [2, 3, 1, 20, 50]
console.log(maxDifference(test3))
