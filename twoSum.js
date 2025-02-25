
function twoSum(arr, target) {
    // write your code below 
    newArry = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                newArry.push(i, j);
            }
        }
    }
    return newArry;
}
console.log(twoSum([8, 12, 5, 2, 10, 17],15));
//console.log(twoSum([2, 7, 11, 15],9));
// Input: arr = [2, 7, 11, 15], target = 9
// Expected Output: [0, 1] (2 + 7 = 9)