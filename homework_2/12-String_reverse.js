function solution(str) {
    let strDiv = str.split('');
    let resultReverse = strDiv.reverse();
    let total = resultReverse.join('');
    return total;
  }

  console.log(solution('javascript'));
  console.log(solution(''));
  console.log(solution('j'));
