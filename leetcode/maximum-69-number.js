/*Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6). */

test1 = 9669
// Output = 9969

test2 = 9996
// Output = 9999

test3 = 9999
// Output = 9999

function max69Num(num) {
  let copy = num.toString().split("")
  let first = copy.indexOf("6")
  copy[first] = "9"
  let result = copy.join("")
  return Number(result)
}

console.log(max69Num(test3))
