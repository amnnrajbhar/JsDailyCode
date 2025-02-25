var isValid = function (s) {
    debugger;
    isFlag = false;
    // if (s.includes(s)) {
    //     isFlag = true;
    // }
    newArray = s.split('');
    newArray.forEach(el => {
        if ((el == '(' && newArray.includes(')')) || (el == ')' && newArray.includes('('))) {
            isFlag = true;
        } else if ((el == '[' && newArray.includes(']')) || (el == ']' && newArray.includes('['))) {
            isFlag = true;
        } else if ((el == '{' && newArray.includes('}')) || (el == '}' && newArray.includes('{'))) {
            isFlag = true;
        } else {
            isFlag = false;
        }
    });
    // for (let i = 0; i < newArray.length; i++) {
    //     if (newArray[i] == '(' && newArray.includes(')')) {
    //         isFlag = true;
    //     } else if (newArray[i] == '[' && newArray.includes(']')) {
    //         isFlag = true;
    //     } else {
    //         isFlag = false;
    //     }
    // }
    return isFlag;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("[]"));
console.log(isValid("([)]"));

