function mathPlus(num1, num2) {
  let fillStr1 = '';
  let fillStr2 = '';
  let result = [];

  if (`${num1}`.length > `${num2}`.length) {
    fillStr1 = `${num1}`.split('');
    fillStr2 = `${num2}`.padStart(`${num1}`.length, '0').split('');
  } else if (`${num1}`.length < `${num2}`.length) {
    fillStr1 = `${num1}`.padStart(`${num2}`.length, '0').split('');
    fillStr2 = `${num2}`.split('');
  } else {
    fillStr1 = `${num1}`.split('');
    fillStr2 = `${num2}`.split('');
  }

  for (let index = 0; index < fillStr1.length; index++) {
    result.push(parseInt(fillStr1[index]) + parseInt(fillStr2[index]));
  }
  return parseInt(result.join(''));
}

console.log(mathPlus(1, 0));
console.log(mathPlus(0, 0));
console.log(mathPlus(101, 1010));
