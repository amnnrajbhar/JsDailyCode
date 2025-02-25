function findMedianSortedArrays(nums1, nums2) {
    // write your code below 
    num = 0;
    newArry = nums1.concat(nums2);
    newArry2 = newArry.sort((a, b) => a - b);
    newArry2.forEach(element => {
        num += element;
    });

    return num / newArry2.length;;
}
console.log(findMedianSortedArrays([2, 4, 6], [1, 3, 5]));