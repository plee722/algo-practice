// 1D Candy Crush

// Given a string, remove all triples of a letter (e.g. 'aaa'). This may create another instance of a triple. Return string when all instances of triples are removed.

let test1 = 'abcccbbddef'
// Output = 'addef'

let test2 = 'babbbacd'
// Output = 'baacd'

let test3 = "aabbbacd"
// Output = 'cd'

let test4 = "aabbccddeeedcba"
// Output = ''

let test5 = "aaabbbacddd"
// Output = "acd"


// Approach
// Init stack array with string[0]
// Loop through string and push letter onto stack
// If top 2 elements of stack are equal to letter, then pop twice to remove them from stack
// Join the stack and return string

// [a, b, b]

function candyCrush(str) {
  let stack = []
  let strIdx = 0
  let stackIdx = 0

  if (!str.length) {
    return ''
  }

  while (strIdx < str.length) {
    let first = stack[stackIdx - 2]
    let second = stack[stackIdx - 1]

    if (first === str[strIdx] && second === str[strIdx]) {
      stack.pop()
      stack.pop()
      stackIdx -= 2
    } else {
      stack.push(str[strIdx])
      stackIdx++
    }
    strIdx++
  }
  return stack.join('')
}

candyCrush(test5)
