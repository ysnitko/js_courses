function mergeArrays(arr1, arr2) {
  let result = [];
  result = arr1.concat(arr2);
  function sortArr(x, y) {
    if (x < y) {
      return -1;
    }

    if (x > y) {
      return 1;
    }

    if (x == y) {
      return 0;
    }
  }

  function delRepeat(result) {
    let tempArr = [];
    for (let index = 0; index < result.length; index++) {
      if (!tempArr.includes(result[index])) {
        tempArr.push(result[index]);
      }
    }
    return tempArr;
  }

  return delRepeat(result).sort(sortArr);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 3, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 12, 3, 4], [10, 3, 6, 4, 2]));
