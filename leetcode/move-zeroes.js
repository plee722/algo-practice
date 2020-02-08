// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

test1 = [0, 1, 0, 3, 12]
// Output: [1,3,12,0,0]

test2 = [0, 0, 0, 0, 10, 20, 30]
// Output: [10, 20, 30, 0, 0, 0, 0]

function moveZeroes(nums) {
  let counter = 0
  let arrayIdx = 0
  // let moved = []
  while (arrayIdx < nums.length) {
    const current = nums[arrayIdx]
    if (current === 0) {
      let moved = nums.splice(arrayIdx, 1)
      nums.push(moved)
      counter++
    } else {
      arrayIdx++
    }
  }
  console.log(nums)
}

moveZeroes(test2)
