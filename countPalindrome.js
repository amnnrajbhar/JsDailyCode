function countPalindromes(str) {
    // write your code below
    newArry=str.split('');
    var result = '';
    for (let i = 0; i <= newArry.length; i++) {
        result += newArry[i].substring(1);
    }
    return result;
}
console.log(countPalindromes('abba'));//"a","b","b","a",bb,abba