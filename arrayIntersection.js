arr1 = [1, 2, 3, 4, 5];
arr2 = [3, 4, 5, 6];
function arrayIntersection(arr1, arr2) {
    // write your code below
    newArry=[];
    arr1.forEach((el1) => {
        arr2.forEach((el2) => {
            if (el1 == el2) {
                newArry.push(el1);
            }
        });
    });
    return newArry;
}
console.log(arrayIntersection(arr1, arr2));
// Input: [1, 2, 3, 4, 5], [3, 4, 5, 6]
// Output: [3, 4, 5]