// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // binary search
    let left = 0
    let right = x;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (mid * mid < x) {
            left = mid + 1;
        }
        else if (mid * mid > x) {
            right = mid - 1;
        }
        else {
            return mid
        }
    }
    return right
   
};