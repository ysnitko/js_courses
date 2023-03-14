// Return an array
function fizzbuzz(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (element % 3 === 0) {
      arr.splice(element - 1, 1, 'Fizz');
    }
    if (element % 5 === 0) {
      arr.splice(element - 1, 1, 'Buzz');
    }

    if (element % 3 === 0 && element % 5 === 0) {
      arr.splice(element - 1, 1, 'FizzBuzz');
    }
  }
  return arr;
}

console.log(fizzbuzz(10));
