function longestWord(str) {
    let result = '';
    let longestStr = '';
    var newSplitArray = str.split(' ');
    for (let i = 0; i < newSplitArray.length; i++) {
        debugger;
        //console.log(newSplitArray[i]);
        if (newSplitArray[i].length > longestStr.length) {
            longestStr = newSplitArray[i];
        }
    }
    return longestStr;
    //console.log('longestStr' + longestStr);
}
console.log(longestWord('What is Javascript'));