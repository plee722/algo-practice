function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  //while loop solution - doesn't work
  // 	let a = 1
  // 	let b = 0
  // 	let temp
  // 	while (n >= 0) {
  // 		temp = a;
  // 		a = a + b;
  // 		b = temp;
  // 		n--;
  // 	}
  // 	return b;
  // }

  // Recursive solution
  // 	if (n === 2) {
  // 		return 1
  // 	} else if (n === 1) {
  // 		return 0
  // 	}
  // 	return getNthFib(n - 1) + getNthFib(n - 2)
  // }

  // 	Using memoization
  // 	if (n in memo) {
  // 		return memo[n]
  // 	} else {
  // 		memo[n] = getNthFib(n - 1) + getNthFib(n - 2)
  // 		return memo[n]
  // 	}
  // }

  // Using dynamic programming
  const twoNum = [0, 1]
  let counter = 3
  while (counter <= n) {
    const nextFib = twoNum[0] + twoNum[1]
    twoNum[0] = twoNum[1]
    twoNum[1] = nextFib
    counter++
  }
  return n > 1 ? twoNum[1] : twoNum[0]
}
