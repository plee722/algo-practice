test1 = ["flower", "flow", "flight"]
// Output = "fl"

test2 = ["dog", "racecar", "car"]
// Output = ""

function longestCommonPrefix(strs) {
  let result = ""
  let commonPrefixes = []
  let record = {}
  for (let j = 0; j < strs.length; j++) {
    let str = strs[j]
    for (let i = 1; i <= str.length; i++) {
      if (!record[str.slice(0, i)]) {
        record[str.slice(0, i)] = 1
      } else {
        record[str.slice(0, i)]++
      }
    }
  }
  for (let key in record) {
    if (record[key] === strs.length) {
      commonPrefixes.push(key)
    }
  }
  if (commonPrefixes.length) {
    result += commonPrefixes.sort((a, b) => b.length - a.length)[0]
  }

  return result
}

console.log(longestCommonPrefix(test2))

//Leetcode solution
    // if(strs.length === 0) return ''
    // let prefix = strs[0]
    // for (let i = 1; i < strs.length; i++) {
    //     while (strs[i].indexOf(prefix) !== 0) {
    //         prefix = prefix.slice(0, prefix.length - 1)
    //         if (!prefix.length) return ''
    //     }
    // }
    // return prefix
