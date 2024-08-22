// 8. String to Integer (atoi)

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length
    let sign = 1;
    let result = 0;

    while (i < n && s[i] === ' ') {
        i++;
    }

    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }
    result *= sign;

    let MAX_INT = Math.pow(2, 31) - 1;
    let MIN_INT = -Math.pow(2, 31);

    if (result > MAX_INT) {
        return MAX_INT;
    }
    else if (result < MIN_INT) {
        return MIN_INT;
    }
    else {
        return result
    }

};