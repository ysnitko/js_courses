function numberOfOccurrences(element) {
  let arr = [0, 1, 2, 2, 3, 6, 9];
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let elem = arr[index];
    if (elem === element) {
      result.push(index);
    }
  }
  return result.length;
}
console.log(numberOfOccurrences(2));
console.log(numberOfOccurrences(9));
console.log(numberOfOccurrences(4));
