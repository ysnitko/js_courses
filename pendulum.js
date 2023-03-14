function pendulum(values) {
  let arr = values.sort((a, b) => a - b);
  let temp = [];
  for (let index = 0; index < arr.length; index++) {
    arr.splice(arr.length / 2 - 1, 1, arr[0]);
  }
  return arr;
}

console.log(pendulum([4, 10, 9, 10]));
