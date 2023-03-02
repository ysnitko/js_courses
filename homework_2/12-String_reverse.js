function solution(str){
    let strDiv = str.split('');
    let resultReverse = strDiv.reverse();
    let total = resultReverse.join('');
    return(total);
  }