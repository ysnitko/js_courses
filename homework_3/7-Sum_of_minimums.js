function sumOfMinimums(arr) {
  for (let index = 0; index < arr.length; index++) {
    let temp = arr[index];
    let sor = temp.sort();
    let min = sor[0];

    return min;
  }
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
