function fibonacciSeq(num = 0) {
    let result = 0;
    n1 = 0;
    n2 = 1;
    var nextTerm=0;
    for (let i = 2; i <= num; i++) {
        //console.log(n1);
        nextTerm = n1 + n2;
        n1=n2;
        n2=nextTerm;
    }
    //result=(num-1)+(num-2);
    return result=nextTerm;
}
console.log(fibonacciSeq(6));
// eg. fn(n)=fn(n-1)+fn(n-2);