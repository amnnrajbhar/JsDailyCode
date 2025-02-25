function reverseInteger(num) {
    debugger;
    result= num.toString().split('').reverse().join('');
    return parseInt(result);
}
console.log(reverseInteger(123));
// 321