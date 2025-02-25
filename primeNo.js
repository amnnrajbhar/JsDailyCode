function primeNo(num = 0) {
    if (num <= 1) {
        return false;
    }
    if (num > 1) {;
        debugger;
        for (let i = 2; i <= num; i++) {
            debugger;
            if (num % i  == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(primeNo(7));