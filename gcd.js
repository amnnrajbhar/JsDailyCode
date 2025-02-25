function gcd(a, b) {
    // write your code below
    let result = Math.min(a, b);
    for (let i = 1; i <= a; i++) {
        if(a % result == 0){
            console.log(i);
            break;
        }
        
    }
    return result;
}
console.log(gcd(12, 18));