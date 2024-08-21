// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length <= 1) return 0;      // Define the base case for the recursion

    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    // Two-pointer approach to calculate max area
    while (left < right) {
        // Calculate area with current left and right pointers
        const area = Math.min(height[left], height[right]) * (right - left);
        // Update maxArea if the new area is larger
        maxArea = Math.max(maxArea, area);
        // Move the pointer that points to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
