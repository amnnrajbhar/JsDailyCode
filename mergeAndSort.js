function mergeSortedArrays(arr1, arr2) {
    // write your code below
    newArry = arr1.concat(arr2);
    newArry = newArry.sort();
    return newArry;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));