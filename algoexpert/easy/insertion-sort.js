// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = 1
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]]
      j -= 1
    }
  }
  return array
}

test = [8, 5, 2, 9, 5, 6, 3]
console.log(insertionSort(test))
