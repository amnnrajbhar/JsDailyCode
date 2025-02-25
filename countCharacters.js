// Write a function that takes a string and returns an object with the count of occurrences of each character.

// Input: "hello"
// Expected Output: {"h": 1, "e": 1, "l": 2, "o": 1}


function countCharacters(str) {
    // write your code below
    result="";
    newArry = str.split('');
    for (let i = 0; i < newArry.length; i++) {
        debugger;
        //console.log(newArry[i]);
        count=newArry.filter(x=>x==newArry[i]);
        //console.log(count);
        if(!result.includes(newArry[i]))
        result+=('{' + newArry[i] + ':' + count.length + "}");
    }
    return result;
}
// console.log(countCharacters('hello'));
console.log(countCharacters('programming'));