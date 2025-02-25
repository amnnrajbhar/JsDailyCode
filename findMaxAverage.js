var findMaxAverage = function (nums, k) {
    debugger;
    totalNumbers = nums.length;
    maxSum = 0;
    currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;
    for (let index = k; index < totalNumbers; index++) {
        currentSum += nums[index] - nums[index - k];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum / k;
};
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000