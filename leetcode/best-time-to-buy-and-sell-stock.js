// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

let test1 = [7, 1, 5, 3, 6, 4]
// Output: 5

let test2 = [7, 6, 4, 3, 1]
// Output: 0

function maxProfit(prices) {


  // Brute force solution
  // let max = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //     for (let j = i+1; j < prices.length; j++) {
  //         if (prices[j] - prices[i] > max) {
  //             max = prices[j] - prices[i]
  //         }
  //     }
  // }
  // return max


  // One pass
  let min = Infinity
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > max) {
      max = prices[i] - min
    }
  }
  return max

};

console.log(maxProfit(test2))
