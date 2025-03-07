var removeElement = function (nums, val) {
    newArray=[];
    nums.forEach(el => {
        if (el != val) {
            newArray.push(el);
        }
    });
    return newArray;
};
//console.log(removeElement([1, 3, 4, 2, 3], 3));
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

var removeElement1 = function(nums, val) {
    let k = 0;  // This will count elements that are not equal to `val`
    debugger;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];  // Move valid elements to the front
            k++;  // Increment the count of valid elements
        }
    }

    // `k` is the number of elements in nums that are not equal to `val`
    return k;
};
console.log(k);
console.log(removeElement1([1, 3, 4, 2, 3], 3));