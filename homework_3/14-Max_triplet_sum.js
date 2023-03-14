function maxTriSum(numbers) {
  numbers.Array.from(new Set(numbers));

  numbers.sort((a, b) => a - b);

  return numbers.slice(0, 3).reduce((sum, n) => sum + n, 0);

  //alternative 1
  // const max1 = Math.max(...numbers);
  // numbers.Array.from(new Set(numbers));
  // const max2 = Math.max(...numbers);
  // const max3 = Math.max(...numbers);
  // numbers.splice(numbers.indexOf(max1), 1)
  // numbers.splice(numbers.indexOf(max2), 1)
  // numbers.splice(numbers.indexOf(max3), 1)
  //alternative2
  // let result = [];
  // let sum = 0;

  // function delRepeat(numbers) {
  //   let tempArr = [];
  //   for (let index = 0; index < numbers.length; index++) {
  //     if (!tempArr.includes(numbers[index])) {
  //       tempArr.push(numbers[index]);
  //     }
  //   }
  //   return tempArr;
  // }
  // result = delRepeat(numbers)
  //   .sort((x, y) => y - x)
  //   .slice(0, 3);
  // for (let index = 0; index < result.length; index++) {
  //   sum += result[index];
  // }
  // return sum;
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
