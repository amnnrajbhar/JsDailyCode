function findMissingNumber(arr) {
    // write your code below
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        //debugger;
        // n1 = ;
        // n2 = arr[i] - 1;
        if (arr[i] != i+1) {
            return i+1;
        }
    }
    return count;
}
console.log(findMissingNumber([1, 3, 4, 5]));