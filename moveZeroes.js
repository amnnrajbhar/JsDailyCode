var moveZeroes = function (nums) {
    debugger;
    item = 0;
    // for (let i = nums.length-1; i>=0; i--) {
    //     nums.push(nums[i]);
    // }
    // return nums;
    nums = nums.sort((a, b) => a - b);
    nums.forEach(element => {
        if (element == 0) {
            nums.push(nums.splice(nums.valueOf(item), 1)[0]);
        }
    });
    nums.splice()
    return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]