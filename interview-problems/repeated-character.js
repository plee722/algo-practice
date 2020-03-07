// Given a string and a number, find the character that occurs the number of times equal to the input number. If multiple characters occur the same number of times, return the first char.

function repeatChar(str, num) {
  let hash = {}

  if (str === '') {
    return ''
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!hash[char]) {
      hash[char] = [1, i]
    } else {
      (hash[char])[0]++
    }
  }

  let firstCharIndex = str.length
  for (let key in hash) {
    if ((hash[key])[0] === num && (hash[key])[1] < firstCharIndex) {
      firstCharIndex = (hash[key])[1]
    }
  }

  if (firstCharIndex === str.length) {
    return ''
  } else {
    return str[firstCharIndex]
  }
}

const str1 = 'abcdeeffg'
const num1 = 2
// Output: 'e'

const str2 = 'cowboyoyy'
const num2 = 3
// Output: 'o'

const str3 = 'abcdefg'
const num3 = 5
// Output: ''

const str4 = ''
const num4 = 10
// Output: ''

console.log(repeatChar(str2, num2))
