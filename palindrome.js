const prompt = require('prompt-sync')();
function palindrome(str) {
    var isPalindrome = false;
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if (result.toLocaleLowerCase() == str.toLocaleLowerCase()) {
        isPalindrome = true;
    }
    return 'String is Palindrome : ' + isPalindrome;
}
const text = prompt('Please enter string :- ');
console.log(palindrome(text));