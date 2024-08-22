// 2225. Find Players With Zero or One Losses

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winCounter = {};
    let loseCounter = {};
    let arr = [];
    let arr2 = [];

    matches.forEach(element => {
        if (winCounter[element[0]] && loseCounter[element[1]]) {
            winCounter[element[0]] += 1;
        }
        else {
            winCounter[element[0]] = 1;
        }
    })
    
    matches.forEach(element => {
        if (loseCounter[element[1]]) {
            loseCounter[element[1]] += 1;
        }
        else {
            loseCounter[element[1]] = 1;
        }
    })
    
    for (let key in winCounter) {
        if (loseCounter.hasOwnProperty(key)) {
            continue;
        }
        else {
            arr2.push(parseInt(key));
        }
    }
    
    for (key in loseCounter) {
        if(loseCounter[key] == 1) {
            var value = key;
            arr.push(parseInt(value))
        }
    }
    return [arr2, arr];
    
    
};