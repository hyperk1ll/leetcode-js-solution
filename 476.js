// 476. Number Complement

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2);
    let res = "";
    
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === "0") {
            res += 1;
        }
        else {
            res += 0;
        }
    }
    return parseInt(res, 2);
    
};