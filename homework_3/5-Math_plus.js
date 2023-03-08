function add(num1, num2) {
  arr = Array.from(arguments);
  console.log(arr);
  return num1 + num2;
}

console.log(add(100, 130));
