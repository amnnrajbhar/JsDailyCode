function removeDuplicateWord(str) {
    var duplicateWord;
    var newArry = str.split(' ');
    duplicateWord = newArry.filter((item, index) =>
        newArry.indexOf(item) == index
    );
    return duplicateWord;
}
console.log(removeDuplicateWord('prathmesh is developer'));