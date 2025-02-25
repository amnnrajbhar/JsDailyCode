var romanToInt = function (s) {
    debugger;
    result = 0;
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    for (let i = 0; i < s.length; i++) {
        current = values[s[i]];
        next = values[s[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));