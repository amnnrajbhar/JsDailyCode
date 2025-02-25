function fibonacciIterative(n) {
    // write your code below
    if(n<=1){
        return n;
    }
    return fibonacciIterative(n-1)+fibonacciIterative(n-2);
}
console.log(fibonacciIterative(6));