function last(x){
    let diff = x.split('').reverse().join('');
    let result = diff.split(' ').sort().join(' ');
    let res = result.split('').reverse().join('');
    let res1 = res.split(' ').reverse().join(' ');
  
    console.log(diff);
    console.log(result);
    console.log(res);
    console.log(res1);
    return res1;
   }
   

console.log(last('what time are we climbing up the volcano'));