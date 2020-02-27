function groupAnagrams(array) {
  if (array.length === 0) {
    return []
  }

  let hash = { [array[0]]: [array[0]] }
  for (let i = 1; i < array.length; i++) {
    for (let key in hash) {
      if (validAnagram(key, array[i])) {
        console.log("the key", key, array[i])
        hash[key].push(array[i])
        break
      } else {
        console.log("non-existent key at first", key, array[i])
        hash[array[i]] = [array[i]]

      }
    }
    // console.log(hash)
  }
  // console.log(hash)

  let results = []
  for (let key in hash) {
    results.push(hash[key])
  }

  return results
}

function validAnagram(str1, str2) {
  //Will complete logic afterwards
  // Return a boolean if two strings are anagrams of each other

  if (str1.length !== str2.length) return false

  let hash = {}
  for (let char of str1) {
    if (!hash[char]) {
      hash[char] = 1
    } else {
      hash[char]++
    }
  }

  for (let char of str2) {
    if (hash[char]) {
      hash[char]--
    } else {
      return false
    }
  }

  for (let key in hash) {
    if (hash[key] !== 0) {
      return false
    }
  }

  return true
}
