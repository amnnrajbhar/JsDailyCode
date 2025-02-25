// Import the sorting function or define it here
function sortDescending(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            // If the left element is smaller, swap with the right element
            if (arr[left] < arr[right]) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }

            // Move the pointers
            if (arr[left] >= arr[right]) {
                left++;
            } else {
                right--;
            }
        }
    }

    return arr;
}

// Test Case 1: Basic Case - Unsorted Array with Distinct Elements
console.log(sortDescending([5, 2, 9, 1, 6])); 
// Expected Output: [9, 6, 5, 2, 1]

// Test Case 2: Array with Duplicate Elements
console.log(sortDescending([4, 2, 9, 9, 2, 5])); 
// Expected Output: [9, 9, 5, 4, 2, 2]

// Test Case 3: 
