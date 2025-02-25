var longestCommonPrefix = function (strs) {
    debugger;
    result = [];
    // for (let i = 0; i < strs.length; i++) {
    temp = strs[0].split('');
    temp1 = strs[1]?.split('');
    temp2 = strs[2]?.split('');
    combined = temp.concat(temp1, temp2);
    // //     break;
    // // }
    // result = combined.filter(x => 

    // );
    temp.forEach(el => {
        temp1.forEach(el1 => {
            temp2.forEach(el2 => {
                if ((el == el1) && (el1 == el2)) {
                    result.push(el);
                }
            });
        });
    });
    return result.join("");
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));