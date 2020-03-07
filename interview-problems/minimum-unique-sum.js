// Given an array, increment any duplicate elements until all elements are unique. The sum of the elements must be the minimum possible.

function getMinimumUniqueSum(arr) {
  arr.sort((a, b) => a - b)

  let sum = arr[0]
  let prev = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= prev) {
      prev = prev + 1
      sum = sum + prev
    } else {
      sum = sum + arr[i]
      prev = arr[i]
    }
  }

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] === arr[i - 1]) {
  //     let j = i
  //     while (j < arr.length && arr[j] <= arr[j - 1]) {
  //       arr[j] = arr[j] + 1
  //       j++
  //     }
  //   }
  //   sum = sum + arr[i]
  // }

  return sum
}

let test = [3, 2, 1, 2, 7]

console.log(getMinimumUniqueSum(test))
