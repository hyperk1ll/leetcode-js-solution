// 81. Search in Rotated Sorted Array II

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // bad solution using sort first
    let sortedNums = nums.sort(function (a, b) {  return a - b;  });

    // binary search
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if(sortedNums[mid] === target) {
            return true;
        }
        else if (sortedNums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
    
};