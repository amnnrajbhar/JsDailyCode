function factorial(num = 0) {
    debugger;
    var result = 1;
    for (let i = 1; i <= num; i++) {
        // console.log(num);
        // console.log(i);x
        result = result * i;
        // result *= num[i];
    }
    return result;
}
console.log(factorial(5));
//eg. 1*2*3*4*5=120;