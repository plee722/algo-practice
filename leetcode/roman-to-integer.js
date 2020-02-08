// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

let test1 = "III"
// Output: 3

let test2 = "IV"
// Output: 4

let test3 = "IX"
// Output: 9

let test4 = "LVIII"
// Output: 58

let test5 = "MCMXCIV"
// Output: 1994

function romanToInt(s) {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i] + s[i + 1]]) {
      sum += hash[s[i] + s[i + 1]]
      i++
    } else if (hash[s[i]]) {
      sum += hash[s[i]]
    }
  }
  return sum
}

console.log(romanToInt(test5))
