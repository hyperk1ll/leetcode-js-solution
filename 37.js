// 37. Sudoku Solver

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var solve = function(board) {
        for(let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    for (let k = 1; k < 10; k++) {
                        if (check(board, i, j, k.toString())) {
                            board[i][j] = k.toString()
                            if (solve(board)) {
                                return board;
                            }
                            board[i][j] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return board;
    }
    var check = function(board, i, j, k) {
        for (let l = 0; l < 9; l++) {
            if (board[i][l] == k || board[l][j] == k) {
                return false
            }
        }
        for (let l = 0; l < 3; l++) {
            for (let m = 0; m < 3; m++) {
                if (board[(Math.floor(i / 3)) * 3 + l][(Math.floor(j / 3)) * 3 + m] == k) {
                    return false;
                }
            }
        }
        return true;

    }
    return solve(board)
    
};