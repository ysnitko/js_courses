function parseFl(str) {
    const re = /[a-zA-Z]/g;
    const symbols = '0123456789.-';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let symb = str[i];
     
        if (symbols.includes(symb)) {
            result += symb;
        }
        else {
            break
        }
    }
    return result === ''?NaN:+result;

  
}
console.log(parseFl('A1.23px4'));
console.log(parseFl('1.23p4'));
console.log(parseFl('-1.23p4'));
console.log(parseFl(''));
console.log(parseFl('1.23.3'));
console.log(parseFl(null));
  