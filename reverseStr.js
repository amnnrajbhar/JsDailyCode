const prompt = require('prompt-sync')();

function reverseStr(str) {
    let result = '';
    //console.log('str length is ' + str.length);
    for (let i = str.length - 1; i >= 0; i--) {
        //console.log(i);
        //console.log(str[i]);
        result += str[i];
    }
    return 'Reversed string : ' + result;
}

const enteredText = prompt('Please enter string to reverse: ');
console.log(reverseStr(enteredText));