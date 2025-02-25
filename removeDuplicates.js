var removeDuplicates = function (nums) {
    newArray=[];
    nums.forEach(el => {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    });
    return newArray;
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]