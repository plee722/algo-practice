function productSum(array, multiplier = 1) {
  multiplier += 1
  let sum = 0;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      sum += (productSum(element, multiplier) * multiplier)
    } else {
      sum += element;
    }
  })
  return sum
}
