function missingWord(nums, str) {
  let arr = str.split('');
  let result = [];
  let noSpaces = arr.filter((i) => i != ' ');
  nums.sort((x, y) => x - y);
  for (let index = 0; index < nums.length; index++) {
    let res = noSpaces.at(nums[index]);
    if (nums[index] > noSpaces.length) {
      return 'No mission today';
    }
    result.push(res);
  }
  return result.join('').toLocaleLowerCase();
}

console.log(missingWord([5, 0, 3], 'I love you'));
console.log(missingWord([12, 4, 6], 'Good Morning'));
