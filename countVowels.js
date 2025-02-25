const prompt = require('prompt-sync')();

function countVowels(str) {
    // write your code below
    count = 0;
    newArry = str.split('');
    //console.log(newArry);
    vowelsArry = ['a', 'i', 'e', 'o', 'u'];
    newArry.forEach(x => {
        vowelsArry.forEach(y => {
            if (x == y) {
                count++;
            }
        })
    });
    return 'Given string has ' + count + ' vowels';
}
const text = prompt('Please enter string : ');
console.log(countVowels(text));