var removeElement = function (nums, val) {
    newArray=[];
    nums.forEach(el => {
        if (el != val) {
            newArray.push(el);
        }
    });
    return newArray;
};
console.log(removeElement([1, 3, 4, 2, 3], 3));
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]