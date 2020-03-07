// Consider a string, sentence, of words separated by spaces where each word is a substring consting of English alphabetic letters only. Find the first word in the sentence that has a length which is both an even number and greater than or equal to the length of any other word of even length in the sentence. If there are multiple words meeting the criteria, return the one which occurs first in the sentence.

function longestEvenWord(str) {
  let index = 0
  let currLength = 0
  let maxLength = 0
  let indexOfMax = -1

  while (index < str.length) {
    if (str[index] === ' ') {
      if (currLength % 2 === 0) {
        if (maxLength < currLength) {
          maxLength = currLength
          indexOfMax = index - currLength
        }
      }
      currLength = 0
    } else {
      currLength++
    }
    index++
  }

  if (currLength % 2 === 0) {
    if (maxLength < currLength) {
      maxLength = currLength
      indexOfMax = index - currLength
    }
  }

  if (indexOfMax === -1) {
    return -1
  }

  return str.substr(indexOfMax, maxLength)
}

let test1 = "Time to write great code"
let test2 = "You are given an array of n numbers"
let test3 = "time hoverd"

console.log(longestEvenWord(test3))
