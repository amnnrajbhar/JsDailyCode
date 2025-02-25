var gcdOfStrings = function (str1, str2) {
    debugger;
    newStr = [];
    str1 = str1.split('');
    str2 = str2.split('');
    for (let i = 0; i < str1.length; i++) {
        debugger;
        if (!newStr.includes(str1[i])) {
            newStr.push(str1[i]);
        }
    }
    //console.log(newStr);
    return newStr.join("");
};
console.log(gcdOfStrings('ABCABC', 'ABC'));
//console.log(gcdOfStrings('AMAN', 'AM'));