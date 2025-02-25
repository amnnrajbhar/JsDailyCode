function areAnagrams(str1, str2) {
    // write your code below
    newArry1 = str1.split('');
    newArry2 = str1.split('');
    newArry3 = newArry1.sort().join('');
    newArry4 = newArry2.sort().join('');
    if (newArry3 == newArry4) {
        return true;
    }
    return false;
}
console.log(areAnagrams("listen", "silent"));