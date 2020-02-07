//Given a collection of intervals, merge all overlapping intervals.

let test = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1,6],[8,10],[15,18]]

let test2 = [[1, 4], [4, 5]]
// Output: [[1,5]]

function mergeIntervals(intervals) {
  let results = []
  let sortedArr = intervals.sort((a, b) => a[0] - b[0])
  let holder = intervals[0]

  let idx = 1

  if (intervals.length <= 1) {
    return intervals
  }

  while (idx !== intervals.length) {
    let currInt = intervals[idx]
    if (currInt[0] <= holder[1] && currInt[1] > holder[1]) {
      holder[1] = currInt[1]
    }
    if (currInt[0] > holder[1]) {
      results.push(holder)
      holder = currInt
    }
    idx++
  }
  results.push(holder)

  return results
}

console.log(mergeIntervals(test2))
