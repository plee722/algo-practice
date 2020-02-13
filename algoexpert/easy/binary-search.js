//Write a function that takes in asorted array of integers as well as a target integer. The function should use the Binary Search algorithm to find if the target number is contained the in array and should return its index if it is, otherwise -1.

function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      start = mid + 1
    } else if (array[mid] > target) {
      end = mid - 1
    }
  }
  return -1
}
