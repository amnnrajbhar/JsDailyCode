array = [9,2, 5, 1, 7, 3, 0, 4,8];

// find Asc No 
// newArry = arry.sort();
// console.log("With Built In "+newArry);

//sort Without built it function
//newArry1 = [];
function dsc(array) {
    for (var i = 1; i < array.length; i++) {
        var tmp = array[i];
        for (var j = i - 1; j >= 0 && (array[j] < tmp); j--) {
            debugger;
            array[j + 1] = array[j];
        }
        array[j + 1] = tmp;
    }
    return array;
}
console.log(`Without Built In ${dsc(array)}`);