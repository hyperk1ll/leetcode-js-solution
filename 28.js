// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var haystackLength = haystack.length;
    var needleLength = needle.length;

    if (haystackLength === 0) return 0;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substring(i, i+ needleLength) === needle) {
            return i;
        }

    }
    return -1;
};