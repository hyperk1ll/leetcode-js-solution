// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    let newArr = new Array(digits.length + 1).fill(0);
    newArr[0] = 1;
    return newArr;
};