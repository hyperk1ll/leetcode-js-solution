// 58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // not the best solution, but this is the first thing that came to my mind
    let x = s.split(" ")
    let arr = [];
    
    for (let i = 0; i <= x.length - 1;i++) {
        if (x[i] !== "") {
            arr.push(x[i])
        }
    }
    
    return arr[arr.length - 1].length
};