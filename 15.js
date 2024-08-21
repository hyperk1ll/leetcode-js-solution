// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);  // Sort the array to handle duplicates and simplify the process

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicates for the first element

        for (let j = i + 1; j < nums.length - 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // Skip duplicates for the second element

            for (let k = j + 1; k < nums.length; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) continue;  // Skip duplicates for the third element

                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return result;
};