// Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.

// Input: [1, 1, 1], 2
// Expected Output: 2 (The subarrays are [1, 1], [1, 1])

function subarraySum(nums, k) {
    // write your code below
    newArry=[];
    for (let i = 0; i < nums.length; i++) {
        debugger;
        // for (let j = i + 1; j < nums.length; j++) {
        //     if (nums[i] + nums[j] == k) {
        //         debugger;
        //         //console.log(result);
        //         //result++;
        //         newArry.push(nums[i], nums[i]);
        //     }
        // }
        newArry.push(nums.splice(i, k));
    }
    //newArry = nums.splice(i, k);
    return newArry;
}
console.log(subarraySum([1, 1, 1], 2));


// function subarraySum(nums, k) {
//     let count = 0;
    
//     // Start from each index
//     for (let start = 0; start < nums.length; start++) {
//         let sum = 0;
        
//         // Calculate sum for each subarray starting from 'start'
//         for (let end = start; end < nums.length; end++) {
//             sum += nums[end];
            
//             // Check if the sum equals the target
//             if (sum === k) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Test
// const nums = [1, 1, 1];
// const k = 2;
// console.log(subarraySum(nums, k)); // Output: 2
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));