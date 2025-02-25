array = [1, 2, 3, 4, 5];
steps = 2;
function rotateArry(steps, array) {
    let newArry = [];
    for (let i = 0; i < array.length; i++) {
        newArry.push(array[i] * steps);
    }
    return newArry;
}
console.log(rotateArry(steps, array));
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]