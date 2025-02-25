function caseSentence(str) {
    result = '';
    newArry = str.split(' ');
    for (let i = 0; i < newArry.length; i++) {

        if (newArry[i].length == 1) {
            result = result + ' ' + newArry[i].toUpperCase();
            //console.log('single value ' + result);
        }
        if (newArry[i].length > 1) {
            result = result + ' ' + String(newArry[i]).charAt(0).toUpperCase() + String(newArry[i].slice(1));;
            //console.log('single value ' + result);
        }
    }
    return result;
}
console.log(caseSentence('this is a title'));