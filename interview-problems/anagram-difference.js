// An anagram is a word whose characters can be reaaranged to create another word. Given two strings, determine the minimum number of characters in either string that must be modified to make the two strings anagrams. If it is not possible to make the two strings anagrams, return -1.

function getMinDifference(str1, str2) {
  if (str1.length !== str2.length) {
    return -1
  }

  let minCount = 0
  let record = {}

  for (let char of str1) {
    if (!record[char]) {
      record[char] = 1
    } else {
      record[char]++
    }
  }

  for (let char of str2) {
    if (record[char]) {
      record[char]--
    }
  }

  for (let key in record) {
    minCount += record[key]
  }

  return minCount
}

let a = ['tea', 'tea', 'act', 'bob']
let b = ['ate', 'toe', 'acts', 'oat']
console.log(getMinDifference(a[3], b[3]))
